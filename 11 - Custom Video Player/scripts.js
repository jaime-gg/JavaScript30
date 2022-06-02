// GET ELEMENTS =====================================================================
const player = document.querySelector('.player'); 
const video = player.querySelector('.viewer');

const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]'); 
const ranges = player.querySelectorAll('.player__slider')

const progressBar = player.querySelector('.progress__filled');
const progress = player.querySelector('.progress');

// FUNCTIONS ========================================================================
function togglePlay() {
    if(video.paused) {
        video.play(); 
    } else {
        video.pause(); 
    }
}

// ---------------------------------------------------

function updateButton() {
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon; 
}

// ---------------------------------------------------

function skip () {
    video.currentTime += parseFloat(this.dataset.skip)
}

// ---------------------------------------------------

function handleRangeUpdate() {
    video[this.name] = this.value; 
}

// ---------------------------------------------------

function handleProgress() {

}

// ---------------------------------------------------


// HOOK UP EVEN LISTENERS ===========================================================
// PLAY VIDEO ------------------------------------------
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay); 

// UPDATE BUTTON ICON ------------------------------------------
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

// SKIP CONTENT ------------------------------------------
skipButtons.forEach(button => button.addEventListener('click', skip)); 

// RANGE SLIDERS ------------------------------------------
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate)); 