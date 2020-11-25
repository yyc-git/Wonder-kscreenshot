(function () {
    let _imFrameZIndex = null;

    let _getIMFrameDomain = () => "http://127.0.0.1:8080";

    let _getIMFrame = () => {
        return window.document.querySelector("iframe");
    };


    let _getIMWindow = () => {
        return document.getElementById("inlineFrameExample").contentWindow;
    }

    let _screenshotParent = () => {
        //65指键盘中的A
        let kss = new kscreenshot(
            {
                key: 65,
                copyPath: (base64) => {
                    return base64;
                },
                needDownload: true,
                endCB: (base64) => {
                    _getIMFrame().style.display = "block";

                    _getIMWindow().postMessage({
                        action: "send",
                        base64
                    }, _getIMFrameDomain())
                },
                cancelCB: (arg) => {
                    _getIMFrame().style.display = "block";
                }
            }
        );

        kss.setNode(window.document.body);

        kss.setDocument(window.document);

        kss.setContainer(window.document.body);

        kss.setContainerDocument(window.document);

        kss.setScrollTop(window.document.documentElement.scrollTop);

        kss.setCanvasHandler((self, canvas) => {
            canvas.style.top = `${-window.document.documentElement.scrollTop}px`;

            return canvas;
        });

        kss.init();

        _getIMFrame().style.display = "none";

        kss.startScreenShot();
    }

    let _appendBlackCanvas = () => {
        _imFrameZIndex = _getIMFrame().style.zIndex;
        _getIMFrame().style.zIndex = 1001;

        let canvas = document.createElement("canvas");

        canvas.id = "kscreenshot-black-canvas";

        canvas.width = window.innerWidth;
        canvas.style.width = `${window.innerWidth}px`;
        canvas.height = window.innerWidth;
        canvas.style.height = `${window.innerWidth}px`;

        canvas.style.position = "fixed";
        canvas.style.top = "0px";
        canvas.style.left = "0px";
        canvas.style.zIndex = 1000;

        let ctx = canvas.getContext("2d");

        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        document.body.append(canvas);


        _getIMWindow().postMessage({
            action: "finishAppend"
        }, _getIMFrameDomain())
    }

    let _removeBlackCanvas = () => {
        if (_imFrameZIndex === null) {
            console.error("_imFrameZIndex shouldn't be null");
            _imFrameZIndex = 0;
        }
        _getIMFrame().style.zIndex = _imFrameZIndex;

        let canvas = document.querySelector("#kscreenshot-black-canvas")

        canvas.remove();

        _getIMWindow().postMessage({
            action: "finishRemove"
        }, _getIMFrameDomain())
    }

    function startup() {
        window.addEventListener("message", (e) => {
            if (e.origin !== _getIMFrameDomain()) {
                return;
            }

            let { from, action } = e.data;

            if (from !== "im") {
                return;
            }

            switch (action) {
                case "screenshotParent":
                    _screenshotParent();
                    break;
                case "append":
                    _appendBlackCanvas();
                    break;
                case "remove":
                    _removeBlackCanvas();
                    break;
            }
        }, false);

    }


    // Set up our event listener to run the startup process
    // once loading is complete.
    window.addEventListener('load', startup, false);
})();
