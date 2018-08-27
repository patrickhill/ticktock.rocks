document.addEventListener('gesturestart', function (e) {
    e.preventDefault();
});

var timerText = document.getElementsByClassName('text-holder')[0];
var timerDuration = getComputedStyle(document.body).getPropertyValue('--timer-duration');

var compiledText = "<div>timer set for</div>" + timerDuration
timerText.innerHTML = compiledText;