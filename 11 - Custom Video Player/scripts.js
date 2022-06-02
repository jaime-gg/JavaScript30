// GET ELEMENTS =====================================================================
const player = document.querySelector('.player'); 
const video = player.querySelector('.viewer');

const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]'); 
const ranges = player.querySelectorAll('.player__slider')

const progressBar = player.querySelector('.progress__filled');
const progress = player.querySelector('.progress');

// FUNCTIONS ========================================================================

// HOOK UP EVEN LISTENERS ===========================================================