// Funcionalidad de Cuenta Regresiva
function updateCountdown() {
    // ESTABLECE LA FECHA OBJETIVO AQUÍ (Viernes 7 de Agosto)
    const quinceDate = new Date('August 7, 2026 16:00:00').getTime();
    const now = new Date().getTime();
    const gap = quinceDate - now;

    if (gap > 0) {
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        const textDay = Math.floor(gap / day);
        const textHour = Math.floor((gap % day) / hour);
        const textMinute = Math.floor((gap % hour) / minute);
        const textSecond = Math.floor((gap % minute) / second);

        document.getElementById('days').innerText = textDay.toString().padStart(2, '0');
        document.getElementById('hours').innerText = textHour.toString().padStart(2, '0');
        document.getElementById('minutes').innerText = textMinute.toString().padStart(2, '0');
        document.getElementById('seconds').innerText = textSecond.toString().padStart(2, '0');
    } else {
        document.getElementById('countdown').innerHTML = "¡EL DÍA HA LLEGADO!";
    }
}

setInterval(updateCountdown, 1000);

// Funcionalidad del Reproductor de Música
const playButton = document.getElementById('play-button');
const song = document.getElementById('quince-song');
let isPlaying = false;

playButton.addEventListener('click', () => {
    if (isPlaying) {
        song.pause();
        playButton.classList.remove('playing');
        playButton.classList.add('paused');
    } else {
        song.play();
        playButton.classList.add('playing');
        playButton.classList.remove('paused');
    }
    isPlaying = !isPlaying;
});
