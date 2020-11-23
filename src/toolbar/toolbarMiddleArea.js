import { css } from '../util'
import colorBoard from './colorBoard'
import setLineWidth from './setLineWidth'

export default function toolbarMiddleArea (me) {
    let clientHeight = window.wonder_containerDocument.documentElement.clientHeight
    let toolbarMiddleArea = window.wonder_containerDocument.createElement('span')
    toolbarMiddleArea.id = 'kssToolbarMiddleArea'

    toolbarMiddleArea.appendChild(colorBoard(me))
    toolbarMiddleArea.appendChild(setLineWidth(me))

    return toolbarMiddleArea
}