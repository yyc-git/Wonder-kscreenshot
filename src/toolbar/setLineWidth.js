import { css } from '../util'

export default function setLineWidth (me) {
    let setLineWidth = window.wonder_containerDocument.createElement('span')
    setLineWidth.id = 'kssSetLineWidth'
    setLineWidth.tabIndex = '-1'

    let numInputWrapper = window.wonder_containerDocument.createElement('div')
    numInputWrapper.id = 'kssNumInputWrapper'

    let numInput = window.wonder_containerDocument.createElement('input')
    numInput.id = 'kssNumInput'
    numInput.value = me.toolbarLineWidth
    numInputWrapper.appendChild(numInput)
    numInput.addEventListener('input', (e) => {
        let val = parseInt(e.currentTarget.value)

        if (val > 20) {
            val = 20
        } else if (val <= 0) {
            val = 1
        }
        numInput.value = val
        me.toolbarLineWidth = val
        css(showLineWidth, {
            width: me.toolbarLineWidth + 'px'
        })
    })
    let arrowNumWrapper = window.wonder_containerDocument.createElement('span')
    arrowNumWrapper.id = 'kssArrowNumWrapper'
 
    let upNum = window.wonder_containerDocument.createElement('div')
    upNum.id = 'kssUpNum'
    upNum.innerHTML = '▲'
    let downNum = window.wonder_containerDocument.createElement('div')
    downNum.id = 'kssDownNum'
    downNum.innerHTML = '▼'

    upNum.addEventListener('click', () => {
        if (numInput.value < 20) {
            numInput.value = parseInt(numInput.value) + 1
            me.toolbarLineWidth = numInput.value
            css(showLineWidth, {
                width: me.toolbarLineWidth + 'px'
            })
        }
    })

    downNum.addEventListener('click', () => {
        if (numInput.value > 1) {
            numInput.value = parseInt(numInput.value) - 1
            me.toolbarLineWidth = numInput.value
            css(showLineWidth, {
                width: me.toolbarLineWidth + 'px'
            })
        }
    })

    arrowNumWrapper.appendChild(upNum)
    arrowNumWrapper.appendChild(downNum)

    numInputWrapper.appendChild(arrowNumWrapper)

    setLineWidth.appendChild(numInputWrapper)

    let showLineWidthWrapper = window.wonder_containerDocument.createElement('div')
    showLineWidthWrapper.id = 'kssShowLineWidthWrapper'

    let showLineWidth = window.wonder_containerDocument.createElement('span')
    showLineWidth.id = 'kssShowLineWidth'
    css(showLineWidth, {
        width: me.toolbarLineWidth + 'px',
        background: '#fb3838'
    })

    showLineWidthWrapper.appendChild(showLineWidth)

    setLineWidth.appendChild(showLineWidthWrapper)

    setLineWidth.addEventListener('focus', (e) => {
        e.currentTarget.style.display = 'block'
    })

    setLineWidth.addEventListener('blur', () => {
        setTimeout(() => {
             if (numInput !== window.wonder_containerDocument.activeElement) {
                setLineWidth.style.display = 'none'
            }
        }, 0)
    })

    numInput.addEventListener('blur', () => {
        setTimeout(() => {
            if (setLineWidth !== window.wonder_containerDocument.activeElement) {
                setLineWidth.style.display = 'none'
           }
       }, 0)
    })

    return setLineWidth
}