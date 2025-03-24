const countDown = document.getElementById('time');
const startBtn = document.getElementById('start-timer');
let requestedTime = 11;

const formatTime = () => {
    let minutes;
    let seconds;

    if(requestedTime > 0) {
        minutes = Math.trunc(requestedTime / 60);
        seconds = requestedTime % 60;

        if(minutes < 10 && seconds < 10) {
            countDown.textContent = `0${minutes}:0${seconds}`;
        } else if(minutes < 10 && seconds > 10) {
            countDown.textContent = `0${minutes}:${seconds}`;
        } else if(minutes > 10 && seconds < 10) {
            countDown.textContent = `${minutes}:0${seconds}`;
        } else {
            countDown.textContent = `${minutes}:${seconds}`;
        }
    } else {
        countDown.textContent = `00:00`;
    }
}

formatTime();

startBtn.addEventListener('click', () => {
    const substractTime = () => {
        requestedTime -= 1;
        formatTime();
    }

    setInterval(substractTime, 1000);

    if(requestedTime == 0) {
        clearInterval(0);
    }
});