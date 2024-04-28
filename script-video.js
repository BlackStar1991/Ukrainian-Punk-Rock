
const btn = document.querySelector('.btn_play');
const video = document.querySelector('.video');

function togglePlayPause() {
    if (video.paused) {
        video.play();
        btn.classList.add('active');
    } else {
        video.pause();
        btn.classList.remove('active');
    }
}

btn.addEventListener('click', togglePlayPause);
video.addEventListener('click', togglePlayPause);

video.addEventListener('play', () => {
    btn.classList.add('active');
});

video.addEventListener('pause', () => {
    btn.classList.remove('active');
});



