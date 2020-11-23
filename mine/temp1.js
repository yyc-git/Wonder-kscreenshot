
// import {a} from './toolbar.js'
// import html2canvas from './html2canvas.min.js'
import domtoimage from './dom-to-image.js'
import { css, remove, domType, addClass, typeChecking } from './util'
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
                top: that._top + Math.min(that.startY, clientY) + 'px',
                left: that._left + Math.min(that.startX, clientX) + 'px'
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
                    top: that._top + that.startY + 'px',
                    left: that._left + that.startX + 'px'
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
                        top: that._top + top + 'px',
                        left: that._left + left + 'px'
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

        //Wonder
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
        this.setPosition = (top, left) => {
            this._top = top;
            this._left = left;
        }
        this.setCanvasHandler = (canvasHandlerFunc) => {
            this._canvasHandlerFunc = (canvas) => {
                return canvasHandlerFunc(this, canvas);
            }
        }




        // this.init(options.key, options.immediately)
        return instance = this
    }

    kss.prototype.init = function (key, immediately) {
        const that = this

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

        //Wonder
        domtoimage.toCanvas(that._node)
            // html2canvas(window.wonder_containerDocument.body, {useCORS:true, scrollY:200})
            .then((canvas) => {
                return this._canvasHandlerFunc === undefined ? canvas : this._canvasHandlerFunc(canvas);
            })
            .then((canvas) => {
                that.kss = canvas
                that.scrollTop = that._document.documentElement.scrollTop
                canvas.id = 'kss'

                that._container.appendChild(canvas)

                addClass(that._container, 'kssBody')

                let top = -that.scrollTop + that._top;
                let left = that._left;
                css(canvas, {
                    top: `${top}px`,
                    left: `${left}px`,
                })

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