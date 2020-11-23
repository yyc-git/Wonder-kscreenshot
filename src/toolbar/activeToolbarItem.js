import { addClass, removeClass } from '../util'

export default function activeToolbarItem (obj) {
    let kssToolbarItemBT = window.wonder_containerDocument.getElementsByClassName('kssToolbarItemBT')

    Array.prototype.forEach.call(kssToolbarItemBT, (it) => {
        removeClass(it, 'kssToolbarActiveItemBT')
    })

    if (obj) {
        addClass(obj, 'kssToolbarActiveItemBT')
        window.wonder_containerDocument.getElementById('kssRectangleCanvas').style.cursor = 'crosshair'
    } else {
        window.wonder_containerDocument.getElementById('kssRectangleCanvas').style.cursor = 'move'
    }
}