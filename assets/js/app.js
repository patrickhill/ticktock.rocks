// document.addEventListener('gesturestart', function (e) {
//     e.preventDefault();
// });

// var timerText = document.getElementsByClassName('text-holder')[0];
// var timerDuration = getComputedStyle(document.body).getPropertyValue('--timer-duration');

// var compiledText = "<div>timer set for</div>" + timerDuration
// timerText.innerHTML = compiledText;

document.getElementById('timerValue').value = '120';

var pausePlay = document.getElementById('pause-play');
var animations = document.getElementsByClassName('animates');

pausePlay.addEventListener("click", function( event ) {
  Array.prototype.forEach.call(animations, function(el) {
	    // console.log(el.style.WebkitAnimationPlayState);
	    if (el.style.WebkitAnimationPlayState === "paused") {
	    	el.style.WebkitAnimationPlayState = "running";
	    } else {
	    	el.style.WebkitAnimationPlayState = "paused";
	    }
	});
}, false);