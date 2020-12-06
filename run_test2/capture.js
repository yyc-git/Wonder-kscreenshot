(function () {
    let _getIFrame = () => {
        return document.querySelector("iframe");
    }

    let _screenshotIM = () => {
        window.devicePixelRatio = 1;

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
                },
                cancelCB: (arg) => {
                }
            }
        );

        // console.log(kss.scale, window.devicePixelRatio)

        kss.scale = 1;

        kss.setNode(_getIFrame().contentWindow.document.body);

        kss.setDocument(_getIFrame().contentWindow.document);

        kss.setContainer(document.body);

        kss.setContainerDocument(document);

        // kss.setScrollTop(window.document.documentElement.scrollTop);
        kss.setScrollTop(_getIFrame().contentWindow.document.documentElement.scrollTop);

        // _getIFrame().contentWindow.document.querySelectorAll("link").forEach((linkDom) => {
        //     // console.log(linkDom.href, linkDom.getAttribute("href"))
        //     // linkDom.setAttribute("href", "embed/a.css");

        //     // console.log(linkDom.href, linkDom.getAttribute("href"))


        //     // linkDom.setAttribute("href", "aaa");

        //     // console.log(linkDom.href)
        // })



        kss.setCanvasHandler((self, canvas) => {
            canvas.style.top = `${- _getIFrame().contentWindow.document.documentElement.scrollTop}px`;

            return canvas;
        });

        kss.init();

        kss.startScreenShot();
    }

    function startup() {
        _getIFrame().contentWindow.document.querySelector("#button").onclick = (e) => {
            _screenshotIM();
        }
    }


    // Set up our event listener to run the startup process
    // once loading is complete.
    window.addEventListener('load', startup, false);
})();
