import { css } from '../../util'
import backToPreImg from '../backToPreImg'
import img from '../../assets/imgs/back.png'
import activeToolbarItem from '../activeToolbarItem'
import layerSort from '../layerSort'

export default function backBT (me) {
    let backBT = window.wonder_containerDocument.createElement('span')
    backBT.id = 'kssbackeBT'
    backBT.className = 'kssToolbarItemBT'
    backBT.title = '后退'

    let backImg = window.wonder_containerDocument.createElement('img')
    backImg.className = 'kssToolbarItemImg'
    backImg.src = img
    me.backBT = backBT

    backBT.appendChild(backImg)

    backBT.addEventListener('click', function () {
        if (me.snapshootList.length > 1) {
            if (me.snapshootList.length === 2) {
                layerSort(me, 'canvasLayer')
                backToInit()
            }
            me.snapshootList.pop()
        } else if (me.snapshootList.length === 1) {
            layerSort(me, 'canvasLayer')
            backToInit()
        }
      
        me.currentImgDom.src = me.snapshootList[me.snapshootList.length - 1]
        setTimeout(function () {
            backToPreImg(me)
        }, 0)
    })

    function backToInit () {
        me.isEdit = false
        me.currentToolType = null
        me.rectangleCanvas.removeEventListener('mousedown', me.toolmousedown)
        window.wonder_containerDocument.removeEventListener('mousemove', me.toolmousemove)
        window.wonder_containerDocument.removeEventListener('mouseup', me.toolmouseup)
        activeToolbarItem(null)
    }

    return backBT
} 