
(function () {
  function _computeSize() {
    let width = window.innerWidth;    // We will scale the photo width to this
    // // // var height = 0;     // This will be computed based on the input stream
    // var height = window.innerHeight;     // This will be computed based on the input stream

    // console.log(width, window.screen.width, window.outerWidth)
    // console.log(height, window.screen.height, window.outerHeight)


    // let screenWidth = window.screen.width;
    let screenHeight = window.screen.height;

    // let pageWidth = window.innerWidth;
    let pageHeight = window.innerHeight;

    // let toolWidth = pageWidth;
    // let toolHeight = window.outerHeight - window.innerHeight;

    let scaleRatio = window.screen.width / window.innerWidth;

    let innerHeight = scaleRatio * window.innerHeight;

    // TODO handle win10
    //mac
    let toolHeight = screenHeight - innerHeight;

    return { width, toolHeight, pageHeight, scaleRatio }
  }

  let _buildStream = (getStreamFunc) => {
    if (getStreamFunc() === null) {
      return navigator.mediaDevices.getDisplayMedia({
        video: {
          frameRate: 10,
        },
        audio: false,
      }).catch(function (err) {
        console.log("An error occurred: " + err);
      });
    }

    return new Promise((resolve, reject) => {
      resolve(getStreamFunc())
    });
  }

  function _takeScreenshotCanvas(setStreamFunc, getStreamFunc) {
    return _buildStream(getStreamFunc)
      .then((stream) => {
        setStreamFunc(stream);

        stream.getVideoTracks()[0].addEventListener('ended', () => {
          console.log("screensharing has ended");

          setStreamFunc(null);
        });

        let video = document.createElement('video')

        let { width, toolHeight, pageHeight, scaleRatio } = _computeSize();

        video.width = width;
        video.style.width = width + "px";
        // video.height = screenHeight;
        // video.style.height = screenHeight + "px";


        return new Promise((resolve, reject) => {
          video.onloadedmetadata = () => {
            video.play()
            video.pause()


            let canvas = document.createElement('canvas');
            let context = canvas.getContext('2d');
            canvas.width = width;
            canvas.style.width = width + "px";
            canvas.height = pageHeight;
            canvas.style.height = pageHeight + "px";
            context.drawImage(video, 0, toolHeight, window.screen.width, pageHeight * scaleRatio, 0, 0, width, pageHeight);

            video.remove();

            resolve(canvas);
          }

          //wait for grant panel closed
          setTimeout(() => {
            video.srcObject = stream;
          }, 300);
        });
      })
  }

  function startup() {
    let startButton = document.querySelector("#start-button");

    let stream = null;

    startButton.addEventListener('click', function (ev) {
      if (document.querySelector("canvas")) {
        document.querySelectorAll("canvas").forEach((canvas) => canvas.remove());
      }

      _takeScreenshotCanvas((s) => {
        stream = s;
      }, () => stream).then((canvas) => {
        document.querySelector("body").appendChild(canvas);
      });
    }, false);
  }

  // Set up our event listener to run the startup process
  // once loading is complete.
  window.addEventListener('load', startup, false);
})();
