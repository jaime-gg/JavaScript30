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

// ------------------------------------------

function updateButton() {

}

// ------------------------------------------

function skip () {

}

// ------------------------------------------

function handleRangeUpdate() {

}

// ------------------------------------------

function handleProgress() {

}

// ------------------------------------------


// HOOK UP EVEN LISTENERS ===========================================================
video.addEventListener('click', togglePlay)


