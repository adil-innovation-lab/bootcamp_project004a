var sceneryFrames =   [
    { transform: 'translateX(100%)' },
    { transform: 'translateX(-100%)' }
  ];
  
var sceneryTiming = {
    duration: 36000,
    iterations: Infinity,
    playbackRate: -2
  };

var background = document.getElementById("background");
var background2 = document.getElementById("background2");

var backgroundMovement = background.animate(sceneryFrames, sceneryTiming);
var background2Movement = background2.animate(sceneryFrames, sceneryTiming);

backgroundMovement.currentTime = backgroundMovement.effect.getTiming().duration / 2
background2Movement.currentTime = backgroundMovement.effect.getTiming().duration / 2

setInterval( function() {
    if (backgroundMovement.playbackRate > 0.4) {
        backgroundMovement.playbackRate *= .7
    }

    if (background2Movement.playbackRate > 0.4) {
        background2Movement.playbackRate *= .9
    }
}, 3000)

var flyFaster = function() {
    backgroundMovement.playbackRate *= 1.2
    background2Movement.playbackRate *= 1.1
}

document.addEventListener("click",flyFaster);