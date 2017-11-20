let clickedTime = 0;
let createdTime = 0;
let reactionTime = 0;


function makeBox(){

  let x = Math.random() * 5000;
  x = Math.floor(x);

  setTimeout(function() {
    document.getElementById("box").style.visibility ="visible";
    document.getElementById("box").style.backgroundColor = randomColor();
    randomShape();

    var top = Math.random();
    top = top * 400;
    var left = Math.random();
    left = left * 400;

    document.getElementById("box").style.top = top + "px";
    document.getElementById("box").style.left = left + "px";
    createdTime = Date.now();
  }, x);
}


function randomColor() {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.round(Math.random() * 15) ];
  }
  return color;
}

function randomShape(){
  var element =   document.getElementById("box");
  var selector = Math.random();
  if (selector < 0.5) {
    element.style.borderRadius = "50%";
  } else {
    element.style.borderRadius = "0";
  }
}



document.getElementById("box").onclick=function(){
  clickedTime = Date.now();
  reactionTime = (clickedTime - createdTime)/ 1000;
  document.getElementById("time").innerHTML = reactionTime;
  this.style.visibility = "hidden";
  makeBox();
};

makeBox();
