function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

var themes = [
  ["#4a9ffe", "#ff88aa"],
  ["#259ca0", "#a9d693"],
  ["#4f73ff", "#33e6b4"],
  ["red", "blue"],
];
// var randomThemeIndex = Math.floor(Math.random()*themes.length)
// document.documentElement.style.setProperty('--color-primary', themes[randomThemeIndex][0]);
// document.documentElement.style.setProperty('--color-secondary', themes[randomThemeIndex][1]);

document.documentElement.style.setProperty('--color-primary', getRandomColor());
document.documentElement.style.setProperty('--color-secondary', getRandomColor());

let isScrolling = false;
let scrollPos = window.scrollY;


var bgAnimationContainer = document.getElementById('bg-animated');
let bgBottom = bgAnimationContainer.getBoundingClientRect().bottom;
var bgWidth = bgAnimationContainer.getBoundingClientRect().width;
var bgHeight = bgAnimationContainer.getBoundingClientRect().height;
var bgTop = bgAnimationContainer.getBoundingClientRect().top;
var boxes = []
var boxOffsetMultipliers = []

function getRandom(min, max, round) {
  if (round) {
    num = Math.floor(Math.random() * max) + min;
  } else {
    num = (Math.random() * max) + min;
  }
  return num;
}
for (i = 0; i < 11; i++) {
  var randoX = getRandom(0,bgWidth,true);
  var randoY = getRandom(bgTop-200,bgBottom-100,true) ;
  var randoWidth = getRandom(16,300,true);
  var randoBlur = getRandom(0,10,true);
  var el = document.createElement('div');
  sides = (bgWidth - 500)/2
  if ( sides < randoX && randoX < (bgWidth - sides)) {
    randoBlur = 8;
  }
  el.className = 'el-' + i;
  el.style.width = randoWidth + 'px';
  el.style.height = randoWidth + 'px';
  el.style.left = randoX + 'px';
  el.style.top = randoY + 'px';
  el.style.opacity = .8;
  el.style.filter = 'blur(' + randoBlur + 'px)';
  bgAnimationContainer.appendChild(el);
  boxes.push(el);
  boxOffsetMultipliers.push( (Math.random()*.8)+.1 );
}



function setElemProperties(scrollPos) {
  boxes.forEach(function(element,i) {
    element.style.position = 'fixed';
    element.style.transform = 'translateY(-' + scrollPos * boxOffsetMultipliers[i] + 'px)';
  });
}

function update() {
  bgBottom = bgAnimationContainer.getBoundingClientRect().bottom;
  
  setElemProperties(scrollPos);


  // -60 instead of 0 so you don't see the style flash behind safari's transparent url bar
  // if (bgBottom > -60) {
  //   setElemProperties(scrollPos);
  // } else {
  //   boxes.forEach(function(element) {
  //     element.style.position = 'absolute';
  //   });
  // }
  isScrolling = false;
}

function onScroll() {
  scrollPos = window.scrollY;
  if (!isScrolling) {
    requestAnimationFrame(update);
  }
  isScrolling = true;
}


window.addEventListener('scroll', onScroll, false);


// call update once to set initial properties
// call using rAF so browsers that don't support it don't call setElemProperties
requestAnimationFrame(update);