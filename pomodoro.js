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
    if (timer.secondsRemaining === 0) {
        // Manually update the display so the timer doesn't display 00:01
        // while the alert is up.
        updateTimeDisplay(0);
        alert("Timer has finished");
        pauseTimer(timer);
    }
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

function setTimer(timer, seconds) {
    pauseTimer(timer);
    timer.secondsRemaining = seconds;
    updateTimeDisplay(timer.secondsRemaining);
}

function setupPage(timer) {
    let startButton = document.querySelector("#startButton");
    let pauseButton = document.querySelector("#pauseButton");
    let pomodoroButton = document.querySelector("#pomodoroButton");
    let shortRestButton = document.querySelector("#shortRestButton");
    let longRestButton = document.querySelector("#longRestButton");

    startButton.addEventListener("click", () => {
        startTimer(timer);
    });

    pauseButton.addEventListener("click", () => {
        pauseTimer(timer);
    });

    pomodoroButton.addEventListener("click", () => {
        setTimer(timer, 1500);
    });

    shortRestButton.addEventListener("click", () => {
        setTimer(timer, 300);
    });

    longRestButton.addEventListener("click", () => {
        setTimer(timer, 900);
    });

    setTimer(timer, 1500);
    updateTimeDisplay(timer.secondsRemaining);
}

(function() {
    let timer = {
        secondsRemaining: 0,
        pomodoroCount: 0,
        shortRestCount: 0,
        longRestCount: 0,
        intervalID: -1
    };

    setupPage(timer);
})();
