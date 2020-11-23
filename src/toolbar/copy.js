import {css, remove, typeChecking} from '../util'

export default function copy (me, url) {
    let imgWrapper = window.wonder_containerDocument.createElement('span')
    css(imgWrapper, {
        opacity: '0'
    })

    let img = window.wonder_containerDocument.createElement('img')
   

    let absolutePath
    if (typeChecking(me.copyPath) === '[object Function]') {
        absolutePath = me.copyPath(url)
    } else {
        absolutePath = null
    }
    
    if (absolutePath === null) {
        return 
    } else {
        img.src = absolutePath
    }

    imgWrapper.appendChild(img)
    window.wonder_containerDocument.body.appendChild(imgWrapper)
    setTimeout(function () {
        css(img, {
            width: img.width / me.scale + 'px',
            height: img.height / me.scale + 'px'
        })

        let selection = window.getSelection()
        let range = window.wonder_containerDocument.createRange()

        range.selectNodeContents(imgWrapper)
 
        selection.removeAllRanges()
        selection.addRange(range)
        window.wonder_containerDocument.execCommand('Copy')
  
        remove(imgWrapper)
    }, 0)
}