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
    timer.currentTimerType = timerType;
    timer.secondsRemaining = timerType.LENGTH;
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
        setTimer(timer, timer.timerType.POMODORO);
    });

    shortRestButton.addEventListener("click", () => {
        setTimer(timer, timer.timerType.SHORTREST);
    });

    longRestButton.addEventListener("click", () => {
        setTimer(timer, timer.timerType.LONGREST);
    });

    setTimer(timer, timer.timerType.POMODORO);
    updateTimeDisplay(timer.secondsRemaining);
}

(function() {
    let timer = {
        timerType: {
            POMODORO: {
                LENGTH: 1500
            },
            SHORTREST: {
                LENGTH: 3
            },
            LONGREST: {
                LENGTH: 900
            }
        },
        secondsRemaining: 0,
        pomodoroCount: 0,
        shortRestCount: 0,
        longRestCount: 0,
        currentTimerType: null,
        intervalID: -1
    };

    setupPage(timer);
})();
