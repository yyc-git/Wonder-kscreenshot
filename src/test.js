function css(dom, obj) {
    for (let i in obj) {
        dom.style[i] = obj[i]
    }
}

function addClass(obj, cls) {
    if (!hasClass(obj, cls)) {
        obj.className += " " + cls
    }
}

let getNode = () => {
    return window.parent.window.wonder_containerDocument.body;
}

let start = (getCanvasFunc) => {
    // domtoimage.toCanvas(window.wonder_containerDocument.body)
    getCanvasFunc(
        getNode()
    ).then((canvas) => {
        canvas.id = 'kss'

        getNode().appendChild(canvas);
        addClass(getNode(), 'kssBody')
        // css(canvas, {
        //     top: `-${that.scrollTop}px`
        // })
    })
}