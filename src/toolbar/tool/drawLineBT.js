import { css } from '../../util'
import makeSnapShoot from '../makeSnapShoot'
import img from '../../assets/imgs/draw.png'
import activeToolbarItem from '../activeToolbarItem'
import layerSort from '../layerSort'

export default function drawLineBT (me) {
    let drawLineBT = window.wonder_containerDocument.createElement('span')
    drawLineBT.id = 'kssDrawLineBT'
    drawLineBT.className = 'kssToolbarItemBT'
    drawLineBT.title = '画刷工具'

    let drawLineImg = window.wonder_containerDocument.createElement('img')
    drawLineImg.className = 'kssToolbarItemImg'
    drawLineImg.src = img
    me.drawLineBT = drawLineBT

    drawLineBT.appendChild(drawLineImg)

    drawLineBT.addEventListener('click', function () {
        me.isEdit = true
        
        let kssSetLineWidth = window.wonder_containerDocument.getElementById('kssSetLineWidth')
        let clientHeight = window.wonder_containerDocument.documentElement.clientHeight
        let bottomSurplus = clientHeight - me.startY - me.height - me.toolbarMarginTop - me.toolbarHeight
        
        if (bottomSurplus < 0) {
            css(kssSetLineWidth, {
                top: '30px',
            })
        } else {
            css(kssSetLineWidth, {
                top: '-40px',
            })
        }

        kssSetLineWidth.style.display = 'block'
        kssSetLineWidth.focus()

        if (me.currentToolType === 'drawLine') {
            return
        }
     
        me.currentToolType = 'drawLine'
        activeToolbarItem(drawLineBT)
        layerSort(me, 'canvasLayer')
       
       if (me.toolmousedown) {
            me.rectangleCanvas.removeEventListener('mousedown', me.toolmousedown)
            window.wonder_containerDocument.removeEventListener('mousemove', me.toolmousemove)
            window.wonder_containerDocument.removeEventListener('mouseup', me.toolmouseup)
        }

        me.rectangleCanvas.addEventListener('mousedown', drawLineMousedownEvent)
        me.toolmousedown= drawLineMousedownEvent

        function drawLineMousedownEvent (e) {
            if (e.button === 2) {
                return
            }
            let context = me.rectangleCanvas.getContext("2d")
            context.beginPath()
            context.moveTo((e.clientX - me.startX) * me.scale, (e.clientY - me.startY) * me.scale)
            
            context.strokeStyle = me.toolbarColor
     
            window.wonder_containerDocument.addEventListener('mousemove', drawLineMousemoveEvent)
            window.wonder_containerDocument.addEventListener('mouseup', drawLineMouseupEvent)
            me.toolmousemove = drawLineMousemoveEvent
            me.toolmouseup = drawLineMouseupEvent

            function drawLineMousemoveEvent (e) {
                context.lineWidth = me.toolbarLineWidth
                context.lineTo((e.clientX - me.startX) * me.scale, (e.clientY - me.startY) * me.scale)
                context.stroke()  
            }
            
            function drawLineMouseupEvent (e) {
                context.closePath()
                window.wonder_containerDocument.removeEventListener('mousemove', drawLineMousemoveEvent)
                window.wonder_containerDocument.removeEventListener('mouseup', drawLineMouseupEvent)
                makeSnapShoot(me)
            }
        }
    })

    return drawLineBT
}