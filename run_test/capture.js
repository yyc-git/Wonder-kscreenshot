(function () {
    let _getParent = () => {
        if (!!window.parent) {
            return window.parent;
        }

        console.warn("window.parent is not exist!");
        return window;
    }

    let _getIMFrame = () => {
        return _getParent().document.querySelector("iframe");
    };

    let _screenshotParent = () => {
        //65指键盘中的A
        let kss = new kscreenshot(
            {
                key: 65,
                copyPath: (base64) => {
                    return base64;
                },
                needDownload: true,
                endCB: (arg) => {
                    _getIMFrame().style.display = "block";
                },
                cancelCB: (arg) => {
                    _getIMFrame().style.display = "block";
                }
            }
        );

        kss.setNode(_getParent().document.body);

        kss.setDocument(_getParent().document);

        kss.setContainer(_getParent().document.body);

        kss.setContainerDocument(_getParent().document);

        kss.init();

        _getIMFrame().style.display = "none";

        kss.startScreenShot();
    }

    let _screenshotIM = () => {
        //65指键盘中的A
        let kss = new kscreenshot(
            {
                key: 65,
                copyPath: (base64) => {
                    return base64;
                },
                needDownload: true,
                endCB: (arg) => {
                },
                cancelCB: (arg) => {
                }
            }
        );

        kss.setNode(document.body);

        kss.setDocument(document);

        kss.setContainer(_getParent().document.body);

        kss.setContainerDocument(_getParent().document);

        kss.setCanvasHandler((self, canvas) => {
            let wholeCanvas = self._containerDocument.createElement("canvas");

            wholeCanvas.width = _getParent().innerWidth;
            wholeCanvas.style.width = `${_getParent().innerWidth}px`;
            wholeCanvas.height = _getParent().innerWidth;
            wholeCanvas.style.height = `${_getParent().innerWidth}px`;

            let ctx = wholeCanvas.getContext("2d");


            ctx.fillStyle = '#f00';
            ctx.fillRect(0, 0, wholeCanvas.width, wholeCanvas.height);

            let top = Number(_getIMFrame().style.top.slice(0, -2));
            let left = Number(_getIMFrame().style.left.slice(0, -2));

            ctx.drawImage(canvas, 0, 0, canvas.width, canvas.height, left, top, canvas.width, canvas.height);

            return wholeCanvas;
        });


        kss.init();

        kss.startScreenShot();
    }


    function startup() {
        document.querySelector("#button").onclick = (e) => {
            // _screenshotIM();
            _screenshotParent();
        }
    }


    // Set up our event listener to run the startup process
    // once loading is complete.
    window.addEventListener('load', startup, false);
})();
