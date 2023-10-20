const timerElem = document.querySelector('.timer');
const playBtn = document.getElementById('play');

let audio = new Audio('Leierkasten.wav');
let currentInterval = null;

playBtn.addEventListener('click', function() {
    if (audio.paused) {
        audio.play();
        audio.onended = function() {
            clearInterval(currentInterval);  // Stoppe den aktuellen Countdown
            timerElem.textContent = "";
            setTimeout(function() {
                timerElem.textContent = "67:00:00";
                countdown(67*60*60);
            }, 1000);
        }
    } else {
        audio.pause();
    }
});

function countdown(seconds) {
    currentInterval = setInterval(() => {
        seconds--;
        let hours = Math.floor(seconds / 3600);
        let minutes = Math.floor((seconds % 3600) / 60);
        let secs = seconds % 60;
        timerElem.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

        if (seconds <= 0) clearInterval(currentInterval);
    }, 1000);
}

// Initial countdown
countdown(2*60 + 17);
