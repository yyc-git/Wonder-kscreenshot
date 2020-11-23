import { css } from '../../util'
import img from '../../assets/imgs/color.png'

export default function colorBT (me) {
    let colorBT = window.wonder_containerDocument.createElement('span')
    colorBT.id = 'kssColorBT'
    colorBT.className = 'kssToolbarItemBT'
    colorBT.title = '颜色工具'

    let colorImg = window.wonder_containerDocument.createElement('img')
    colorImg.className = 'kssToolbarItemImg'
    colorImg.src = img
    me.colorBT = colorBT

    colorBT.appendChild(colorImg)

    colorBT.addEventListener('click', function () {
        let clientHeight = window.wonder_containerDocument.documentElement.clientHeight
        let colorBoard = window.wonder_containerDocument.getElementById('kssColorBoard')
        let bottomSurplus = clientHeight - me.startY - me.height - me.toolbarMarginTop - me.toolbarHeight

        if (bottomSurplus < 0) {
            css(colorBoard, {
                top: '30px',
            })
        } else {
            css(colorBoard, {
                top: '-40px',
            })
        }

        colorBoard.style.display = 'block'
        colorBoard.focus()
    })

    return colorBT
}