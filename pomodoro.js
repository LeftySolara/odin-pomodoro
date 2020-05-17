class Timer {
    constructor() {
        this.secondsRemaining = 1500;
        this.pomodoroCount = 0;
        this.shortRestCount = 0;
        this.longRestCount = 0;
    }

    // Formats the remaining number of seconds to mm:ss format
    formatRemainingTime() {
        let minutes = Math.trunc(this.secondsRemaining / 60);
        let seconds = this.secondsRemaining % 60;

        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        return minutes + ":" + seconds;
    }
}

function updateTimeDisplay(timer) {
    let timeDisplay = document.querySelector("#timeDisplay");
    timeDisplay.innerHTML = timer.formatRemainingTime();
}

(function() {
    let timer = new Timer();
    updateTimeDisplay(timer);
})();
