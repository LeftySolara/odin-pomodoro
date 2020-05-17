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

function tick(timer) {
    --timer.secondsRemaining;
}

function startTimer(timer) {
    timer.intervalID = window.setInterval(() => {
        tick(timer);
        updateTimeDisplay(timer.secondsRemaining);
    }, 1000);
}

function pauseTimer(timer) {
    window.clearInterval(timer.intervalID);
}

function setupPage(timer) {
    let startButton = document.querySelector("#startButton");
    let pauseButton = document.querySelector("#pauseButton");

    startButton.addEventListener("click", () => {
        startTimer(timer);
    });

    pauseButton.addEventListener("click", () => {
        pauseTimer(timer);
    });

    updateTimeDisplay(timer.secondsRemaining);
}

(function() {
    let timer = {
        secondsRemaining: 1500,
        pomodoroCount: 0,
        shortRestCount: 0,
        longRestCount: 0,
        intervalID: -1
    };

    setupPage(timer);
})();
