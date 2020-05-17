// Format the given number of seconds to mm:ss format
function formatSeconds(totalSeconds) {
    let minutes = Math.trunc(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    return minutes + ":" + seconds;
}

function updateTimeDisplay(seconds) {
    let timeDisplay = document.querySelector("#timeDisplay");
    timeDisplay.innerHTML = formatSeconds(seconds);
}

(function() {
    let timer = {
        secondsRemaining: 1500,
        pomodoroCount: 0,
        shortRestCount: 0,
        longRestCount: 0
    };

    updateTimeDisplay(timer.secondsRemaining);
})();
