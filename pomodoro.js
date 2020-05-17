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

        if (timer.secondsRemaining === 0) {
            pauseTimer(timer);
            alert("Timer has finished");
        }
    }, 1000);
}

function pauseTimer(timer) {
    window.clearInterval(timer.intervalID);
}

function setTimer(timer, timerType) {
    pauseTimer(timer);
    timer.timerType = timerType;
    timer.secondsRemaining = timerType.LENGTH;
    updateTimeDisplay(timer.secondsRemaining);
}

function setupPage(timer, timerType) {
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
        setTimer(timer, timerType.POMODORO);
    });

    shortRestButton.addEventListener("click", () => {
        setTimer(timer, timerType.SHORTREST);
    });

    longRestButton.addEventListener("click", () => {
        setTimer(timer, timerType.LONGREST);
    });

    setTimer(timer, timerType.POMODORO);
    updateTimeDisplay(timer.secondsRemaining);
}

(function() {
    const timerType = {
        POMODORO: {
            LENGTH: 1500
        },
        SHORTREST: {
            LENGTH: 300
        },
        LONGREST: {
            LENGTH: 900
        }
    };
    Object.freeze(timerType);

    let timer = {
        secondsRemaining: 0,
        pomodoroCount: 0,
        shortRestCount: 0,
        longRestCount: 0,
        currentTimerType: timerType.POMODORO,
        intervalID: -1
    };

    setupPage(timer, timerType);
})();
