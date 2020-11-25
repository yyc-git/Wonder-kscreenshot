(function () {
    let _getParentDomain = () => "http://127.0.0.1:8887";

    let _screenshotIM = () => {
        //65指键盘中的A
        let kss = new kscreenshot(
            {
                key: 65,
                copyPath: (base64) => {
                    return base64;
                },
                needDownload: true,
                endCB: (base64) => {
                    console.log(base64);

                    window.parent.postMessage({
                        from: "im",
                        action: "remove"
                    }, _getParentDomain());
                },
                cancelCB: (arg) => {
                    window.parent.postMessage({
                        from: "im",
                        action: "remove"
                    }, _getParentDomain());
                }
            }
        );

        kss.setNode(document.body);

        kss.setDocument(document);

        kss.setContainer(document.body);

        kss.setContainerDocument(document);

        kss.setScrollTop(window.document.documentElement.scrollTop);

        kss.setCanvasHandler((self, canvas) => {
            canvas.style.top = `${- window.document.documentElement.scrollTop}px`;

            return canvas;
        });

        kss.init();

        kss.startScreenShot();
    }


    // let _handleForScreenshotParent = () => {
    //     window.parent.postMessage({
    //         from: "im",
    //         action: "parent"
    //     }, _getParentDomain());
    // };

    // let _handleForScreenshotIM = () => {
    //     window.parent.postMessage({
    //         from: "im",
    //         // action: "parent"
    //         action: "append"
    //     }, _getParentDomain());
    // };


    function startup() {
        document.querySelector("#button").onclick = (e) => {
            window.parent.postMessage({
                from: "im",
                action: "screenshotParent"
            }, _getParentDomain());

            // window.parent.postMessage({
            //     from: "im",
            //     action: "append"
            // }, _getParentDomain());

            window.addEventListener("message", (e) => {
                if (e.origin !== _getParentDomain()) {
                    return;
                }

                let { base64, action } = e.data;

                switch (action) {
                    case "finishAppend":
                        _screenshotIM();
                        break;
                    case "finishRemove":
                        console.log("finish remove");
                        break;
                    case "send":
                        console.log("base64 from parent: ", base64.slice(0, 30));
                        break;
                }
            }, false)
        }
    }


    // Set up our event listener to run the startup process
    // once loading is complete.
    window.addEventListener('load', startup, false);
})();
