// document.addEventListener('gesturestart', function (e) {
//     e.preventDefault();
// });

// var timerText = document.getElementsByClassName('text-holder')[0];
// var timerDuration = getComputedStyle(document.body).getPropertyValue('--timer-duration');

// var compiledText = "<div>timer set for</div>" + timerDuration
// timerText.innerHTML = compiledText;

document.getElementById('timerValue').value = '5';

var timerPausePlay = document.getElementById('pause-play');
var timerStart = document.getElementById('timer-start');
var timerValue = document.getElementById('timerValue');
var animations = document.getElementsByClassName('animates');

timerPausePlay.addEventListener("click", function( event ) {
  Array.prototype.forEach.call(animations, function(el) {
	    // console.log(el.style.animationPlayState);
	    if (el.style.animationPlayState === "paused") {
	    	el.style.animationPlayState = "running";
	    } else {
	    	el.style.animationPlayState = "paused";
	    }
	});
}, false);

timerStart.addEventListener("click", function( event ) {
  Array.prototype.forEach.call(animations, function(el) {
  	el.classList.remove('animates');
  	void el.offsetWidth; // triggers reflow
  	el.style["animation-duration"] = timerValue.value + 's';
  	el.classList.add('animates');
  	el.style.animationPlayState = "running";
	});
}, false);

