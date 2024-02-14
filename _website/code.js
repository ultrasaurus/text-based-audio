
/**
 * Function that plays audio between two timestamps.
 * 
 * @param {Object} aud - The audio object to be played.
 * @param {number} start - The start timestamp in seconds.
 * @param {number} end - The end timestamp in seconds.
 * @returns {undefined}
*/
function playAudio(aud, start, end) {
    // set the current playback time to the start time
    aud.currentTime = start;

    // play the audio file
    aud.play();

    // when the audio reaches the end time, pause the playback
    aud.ontimeupdate = function () {
        if (aud.currentTime >= end) {
            aud.pause();

            // Optional: reset playback to the starting point
            // aud.currentTime = start;
        }
    }
}


// code to exercises playAudio() function written above
document.addEventListener("DOMContentLoaded", function () {
    // Function to be executed after document loads
    var button = document.createElement("button");
    button.setAttribute("id", "my-button");
    button.innerText = "Click me to play 10 seconds of audio starting at 10 sec into the clip";

    var body = document.querySelector("body");
    body.insertBefore(button, body.firstChild); // Insert the button at the top of the body

    button.addEventListener("click", function () {
        myFunction();
    });
});

function myFunction() {
    // use like this
    const aud = document.getElementById('my-audio');
    const start = 10; // start at 10 seconds
    const end = 20; // end at 20 seconds

    playAudio(aud, start, end);
}
