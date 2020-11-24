
// import {a} from './toolbar.js'
import html2canvas from './html2canvas.js'
// import domtoimage from './dom-to-image.js'
import { css, remove, domType, addClass, typeChecking, loadCssCode } from './util'
import createDragDom from './createDragDom.js'
import createToolbar from './toolbar/toolbar.js'
import drawMiddleImage from './toolbar/middleImage/drawMiddleImage'
import clearMiddleImage from './toolbar/middleImage/clearMiddleImage'
import endAndClear from './toolbar/endAndClear'
import backRightClient from './backRightClient'
import toolbarPosition from './toolbar/toolbarPosition'
import cursorImg from './assets/imgs/cursor.ico'
import './kss.scss'
import { resolve } from 'uri-js'

function initLineWidth(initLine) {
    if (isNaN(initLine)) {
        return 10
    } else {
        if (initLine > 10) {
            return 10
        } else if (initLine < 1) {
            return 1
        } else {
            return initLine
        }
    }
}

let kss = (function () {
    let instance

    //单例模式
    let kss = function (options) {
        if (instance) {
            return instance
        }

        this.kss = null
        this.style = null
        this.kssScreenShotWrapper = null
        this.kssTextLayer = null
        this.rectangleCanvas = null
        this.toolbar = null
        this.scale = window.devicePixelRatio || 1
        //存储当前快照的元素
        this.currentImgDom = null
        //截图状态
        this.isScreenshot = false
        //快照组
        this.snapshootList = []
        /*
        * 1: 点下左键，开始状态
        * 2: 鼠标移动，进行状态
        * 3: 放开左键，结束状态
        * */
        this.drawingStatus = null
        this.currentToolType = null
        this.imgBase64 = null
        this.isEdit = false
        this.startX = null
        this.startY = null
        this.width = null
        this.height = null
        this.dotSize = 6
        this.lineSize = 2
        //工具显示状态
        this.toolShow = options.toolShow
        //工具栏样式
        this.toolbarWidth = null
        this.toolbarHeight = 30
        this.toolbarMarginTop = 5
        this.toolbarColor = '#fb3838'
        this.toolbarLineWidth = typeChecking(options.toolShow) === '[object Object]' ? initLineWidth(options.toolShow.drawLine) : 10


        //工具栏事件
        this.toolmousedown = null
        this.toolmousemove = null
        this.toolmouseup = null

        //根据base64获取绝对地址
        this.copyPath = options.copyPath
        //是否下载
        this.needDownload = options.needDownload

        //成功回调
        this.endCB = options.endCB
        //撤销回调
        this.cancelCB = options.cancelCB

        this.startDrawDown = (e) => {
            const that = this
            that._containerDocument.addEventListener('mouseup', that.cancelDrawingStatus)
            that._containerDocument.addEventListener('contextmenu', that.preventContextMenu)
            //当不是鼠标左键时立即返回
            if (e.button !== 0) {
                return
            }

            if (that.drawingStatus !== null) {
                return
            }
            that.drawingStatus = 1

            that.startX = e.clientX
            that.startY = e.clientY
            //移除并添加
            remove(that._containerDocument.getElementById('kssScreenShotWrapper'))
            let kssScreenShotWrapper = that._containerDocument.createElement('div')
            kssScreenShotWrapper.id = 'kssScreenShotWrapper'
            that.kssScreenShotWrapper = kssScreenShotWrapper
            let kssTextLayer = that._containerDocument.createElement('div')
            kssTextLayer.id = 'kssTextLayer'
            that.kssTextLayer = kssTextLayer

            kssScreenShotWrapper.appendChild(kssTextLayer)
            that._container.appendChild(kssScreenShotWrapper)

            that._containerDocument.addEventListener('mousemove', that.drawing)
            that._containerDocument.addEventListener('mouseup', that.endDraw)
        }

        this.drawing = (e) => {
            const that = this
            that.drawingStatus = 2

            let client = backRightClient(e)
            let clientX = client[0]
            let clientY = client[1]

            css(that.kssScreenShotWrapper, {
                height: Math.abs(clientY - that.startY) + 'px',
                width: Math.abs(clientX - that.startX) + 'px',
                top: Math.min(that.startY, clientY) + 'px',
                left: Math.min(that.startX, clientX) + 'px'
            })
        }

        this.endDraw = (e) => {
            if (e.button !== 0) {
                return
            }
            const that = this
            that.drawingStatus = 3

            if (that.startX === e.clientX && that.startY === e.clientY) {
                let clientHeight = that._document.documentElement.clientHeight
                let clientWidth = that._document.documentElement.clientWidth
                that.startX = 2
                that.startY = 2
                that.height = clientHeight - 4
                that.width = clientWidth - 4
                css(that.kssScreenShotWrapper, {
                    height: that.height + 'px',
                    width: that.width + 'px',
                    top: that.startY + 'px',
                    left: that.startX + 'px'
                })
            } else {
                let client = backRightClient(e)
                let clientX = client[0]
                let clientY = client[1]

                that.width = Math.abs(clientX - that.startX)
                that.height = Math.abs(clientY - that.startY)
                that.startX = Math.min(that.startX, clientX)
                that.startY = Math.min(that.startY, clientY)
            }
            that._containerDocument.removeEventListener('mousemove', that.drawing)

            let canvas = that._containerDocument.createElement('canvas')
            canvas.id = 'kssRectangleCanvas'

            that.kssScreenShotWrapper.appendChild(canvas)
            that.rectangleCanvas = canvas
            canvas.addEventListener('mousedown', function (event) {
                if (that.isEdit || event.button === 2) {
                    return
                }
                clearMiddleImage(that)
                let startX = event.clientX
                let startY = event.clientY
                that._containerDocument.addEventListener('mousemove', canvasMoveEvent)
                that._containerDocument.addEventListener('mouseup', canvasUpEvent)
                //最后左上角的top和left
                let top
                let left
                function canvasMoveEvent(e) {
                    let clientHeight = that._document.documentElement.clientHeight
                    let clientWidth = that._document.documentElement.clientWidth

                    top = that.startY + e.clientY - startY

                    if (that.startY + e.clientY - startY + that.height > clientHeight) {
                        top = clientHeight - that.height
                    }

                    if (that.startY + e.clientY - startY < 0) {
                        top = 0
                    }

                    left = that.startX + e.clientX - startX

                    if (that.startX + e.clientX - startX + that.width > clientWidth) {
                        left = clientWidth - that.width
                    }

                    if (that.startX + e.clientX - startX < 0) {
                        left = 0
                    }

                    css(that.kssScreenShotWrapper, {
                        top: top + 'px',
                        left: left + 'px'
                    })

                    toolbarPosition(that, that.width, that.height, top, left, that.toolbar)
                }

                function canvasUpEvent(e) {
                    if (top === undefined) {
                        top = that.startY
                    }

                    if (left === undefined) {
                        left = that.startX
                    }
                    that.startY = top
                    that.startX = left
                    that._containerDocument.removeEventListener('mousemove', canvasMoveEvent)
                    that._containerDocument.removeEventListener('mouseup', canvasUpEvent)
                    drawMiddleImage(that)
                }
            })
            that.kss.removeEventListener('mousedown', that.startDrawDown)
            that._containerDocument.removeEventListener('mouseup', that.endDraw)

            createDragDom(
                that.kssScreenShotWrapper,
                that.dotSize,
                that.lineSize,
                that
            )
            let img = that._containerDocument.createElement('img')
            img.id = 'kssCurrentImgDom'

            that.kssScreenShotWrapper.appendChild(img)
            that.currentImgDom = img
            drawMiddleImage(that)
            that.toolbar = createToolbar(that)
        }

        this.preventContextMenu = (e) => {
            e.preventDefault()
        }

        this.cancelDrawingStatus = (e) => {
            const that = this
            if (e.button === 2) {
                if (that.drawingStatus === null) {
                    that._containerDocument.removeEventListener('mouseup', that.cancelDrawingStatus)
                    setTimeout(function () {
                        that._containerDocument.removeEventListener('contextmenu', that.preventContextMenu)
                    }, 0)

                    endAndClear(that)
                    that.cancelCB()
                    return
                }
                remove(that.kssScreenShotWrapper)
                that.kssScreenShotWrapper = null
                that.kssTextLayer = null
                that.rectangleCanvas = null
                that.drawingStatus = null
                that.isEdit = false
                that.snapshootList = []
                that.currentToolType = null
                that.toolmousedown = null
                that.toolmousemove = null
                that.toolmouseup = null
                that.kss.addEventListener('mousedown', that.startDrawDown)
            }
        }
        this.startScreenShot = () => {
            this.start()
        }
        this.endScreenShot = () => {
            endAndClear(this)
        }

        this.setNode = (node) => {
            this._node = node;
        }
        this.setDocument = (document) => {
            this._document = document;
        }

        this.setContainer = (container) => {
            this._container = container;
        }
        this.setContainerDocument = (containerDocument) => {
            this._containerDocument = containerDocument;

            window.wonder_containerDocument = containerDocument;
        }
        this.setCanvasHandler = (canvasHandlerFunc) => {
            this._canvasHandlerFunc = (canvas) => {
                return canvasHandlerFunc(this, canvas);
            }
        }
        this.setScrollTop = (scrollTop) => {
            this._scrollTop = scrollTop;
        }
        this.setFinishHandler = (finishHandlerFunc) => {
            this.finishHandlerFunc = finishHandlerFunc;
        }

        // this.init(options.key, options.immediately)
        return instance = this
    }

    kss.prototype.init = function (key, immediately) {
        const that = this

        if (window.wonder_isInsertKssCss !== true) {
            window.wonder_isInsertKssCss = true;

            loadCssCode(
                `
		.kssBody {
			/* cursor: url("./assets/imgs/cursor.ico"), auto; */
			user-select: none;
			overflow: hidden;
			/* margin: 0;
			padding: 0; */
		}


		/* @charset "UTF-8"; */
		/* .kssBody {
			cursor: url("./assets/imgs/cursor.ico"), auto;
			user-select: none;
		} */

		.kssBody #kss {
			position: fixed;
			top: 0;
			left: 0;
			z-index: 10000;
		}

		.kssBody #kssScreenShotWrapper {
			position: fixed;
			background: transparent;
			box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.3);
			z-index: 10001;
		}

		.kssBody #kssScreenShotWrapper #kssTextLayer {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: 98;
			cursor: crosshair;
		}

		.kssBody #kssScreenShotWrapper #kssTextLayer .kssTextarea {
			background: transparent;
			resize: none;
			min-width: 60px;
			min-height: 36px;
			box-sizing: border-box;
			border-color: transparent;
			overflow: hidden;
			font-family: 宋体;
		}

		.kssBody #kssScreenShotWrapper #kssTextLayer .kssTextarea:hover {
			cursor: text;
			outline: #488ff9 solid 1px;
		}

		.kssBody #kssScreenShotWrapper #kssRectangleCanvas {
			height: 100%;
			width: 100%;
			top: 0;
			left: 0;
			cursor: move;
			position: absolute;
			z-index: 99;
		}

		.kssBody #kssScreenShotWrapper .kssDot,
		.kssBody #kssScreenShotWrapper .kssLine {
			position: absolute;
			background: #488ff9;
			z-index: 100;
		}

		.kssBody #kssScreenShotWrapper #kssCurrentImgDom {
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;
			left: 0;
			display: none;
		}

		.kssBody #kssScreenShotWrapper #kssToolbar {
			position: absolute;
			right: 0;
			background: #f1f1f1;
			font-size: 14px;
			border: 1px solid #dedede;
			border-radius: 4px;
			box-sizing: border-box;
			z-index: 100;
		}

		.kssBody #kssScreenShotWrapper #kssToolbar .kssToolbarItemBT {
			display: inline-block;
			width: 30px;
			height: 28px;
			text-align: center;
			float: right;
			cursor: pointer;
		}

		.kssBody #kssScreenShotWrapper #kssToolbar .kssToolbarItemBT:hover {
			background: #dedede;
		}

		.kssBody #kssScreenShotWrapper #kssToolbar .kssToolbarItemBT .kssToolbarItemImg {
			width: 20px;
			height: 20px;
			margin-top: 5px;
		}

		.kssBody #kssScreenShotWrapper #kssToolbar .kssToolbarActiveItemBT {
			background: #dedede;
		}

		.kssBody #kssScreenShotWrapper #kssToolbar #kssToolbarMiddleArea #kssColorBoard {
			position: absolute;
			width: 180px;
			height: 40px;
			right: 0;
			background: #fff;
			border: 1px solid #bbb;
			border-radius: 4px;
			display: none;
			outline: none;
			cursor: default;
			z-index: 100;
		}

		.kssBody #kssScreenShotWrapper #kssToolbar #kssToolbarMiddleArea #kssColorBoard #kssCurrentColor {
			display: inline-block;
			width: 30px;
			height: 30px;
			margin: 5px 8px 0 8px;
			box-sizing: border-box;
			border: 1px solid #333;
		}

		.kssBody #kssScreenShotWrapper #kssToolbar #kssToolbarMiddleArea #kssColorBoard #kssColorItemWrapper {
			display: inline-block;
			vertical-align: top;
			width: 130px;
			margin-top: 5px;
			font-size: 0;
		}

		.kssBody #kssScreenShotWrapper #kssToolbar #kssToolbarMiddleArea #kssColorBoard #kssColorItemWrapper .kssColorItem {
			display: inline-block;
			width: 14px;
			height: 14px;
			margin-right: 2px;
			box-sizing: border-box;
			border: 1px solid #333;
			cursor: pointer;
		}

		.kssBody #kssScreenShotWrapper #kssToolbar #kssToolbarMiddleArea #kssSetLineWidth {
			position: absolute;
			width: 155px;
			height: 40px;
			right: 0;
			background: #fff;
			border: 1px solid #bbb;
			border-radius: 4px;
			display: none;
			outline: none;
			cursor: default;
			z-index: 100;
		}

		.kssBody #kssScreenShotWrapper #kssToolbar #kssToolbarMiddleArea #kssSetLineWidth #kssNumInputWrapper {
			margin: 7px 0 0 8px;
			position: relative;
			display: inline-block;
		}

		.kssBody #kssScreenShotWrapper #kssToolbar #kssToolbarMiddleArea #kssSetLineWidth #kssNumInputWrapper #kssNumInput {
			width: 40px;
			height: 24px;
			border: 1px solid #bbb;
			border-radius: 4px;
			padding: 0 15px 0 8px;
		}

		.kssBody #kssScreenShotWrapper #kssToolbar #kssToolbarMiddleArea #kssSetLineWidth #kssNumInputWrapper #kssArrowNumWrapper {
			position: absolute;
			right: 0;
			top: 1px;
			border-radius: 0 4px 4px 0;
			font-size: 0;
			line-height: 12px;
		}

		.kssBody #kssScreenShotWrapper #kssToolbar #kssToolbarMiddleArea #kssSetLineWidth #kssNumInputWrapper #kssArrowNumWrapper #kssUpNum,
		.kssBody #kssScreenShotWrapper #kssToolbar #kssToolbarMiddleArea #kssSetLineWidth #kssNumInputWrapper #kssArrowNumWrapper #kssDownNum {
			height: 12px;
			font-size: 12px;
			cursor: pointer;
		}

		.kssBody #kssScreenShotWrapper #kssToolbar #kssToolbarMiddleArea #kssSetLineWidth #kssNumInputWrapper #kssArrowNumWrapper #kssUpNum:hover,
		.kssBody #kssScreenShotWrapper #kssToolbar #kssToolbarMiddleArea #kssSetLineWidth #kssNumInputWrapper #kssArrowNumWrapper #kssDownNum:hover {
			background: #dedede;
		}

		.kssBody #kssScreenShotWrapper #kssToolbar #kssToolbarMiddleArea #kssSetLineWidth #kssShowLineWidthWrapper {
			display: inline-block;
			height: 40px;
			line-height: 40px;
			vertical-align: top;
			width: 80px;
			text-align: center;
		}

		.kssBody #kssScreenShotWrapper #kssToolbar #kssToolbarMiddleArea #kssSetLineWidth #kssShowLineWidthWrapper #kssShowLineWidth {
			height: 20px;
			display: inline-block;
			vertical-align: middle;
		}`
            );
        }

        if (immediately === true) {
            that.start()
            that.end()
        }

        if (key === undefined) {
            key = 65
        } else if (key === null) {
            return
        }

        that._containerDocument.addEventListener('keydown', isRightKey.bind(null, key))

        function isRightKey(key, e) {
            if (e.keyCode === key && e.shiftKey && !that.isScreenshot) {
                that.start()
                that.end()
            }
        }
    }

    kss.prototype.start = function () {
        const that = this
        if (that.isScreenshot) {
            return
        }
        that.isScreenshot = true

        // domtoimage.toCanvas(that._node, {
        // scrollFix:true
        //         })
        html2canvas(that._node, {
            useCORS: true,
            allowTaint: true
        })
            .then((canvas) => {
                return this._canvasHandlerFunc === undefined ? canvas : this._canvasHandlerFunc(canvas);
            })
            .then((canvas) => {
                that.kss = canvas
                that.scrollTop = this._scrollTop;
                canvas.id = 'kss'

                that._container.appendChild(canvas)

                addClass(that._container, 'kssBody')

                canvas.addEventListener('mousedown', that.startDrawDown)
            })
    }

    kss.prototype.end = function () {
        const that = this

        that.endScreenShot = function (e) {
            if (e.keyCode === 27) {
                endAndClear(that)
                that.cancelCB()
            }
        }

        that._containerDocument.addEventListener('keydown', that.endScreenShot)
    }

    return kss
})()

export default kss