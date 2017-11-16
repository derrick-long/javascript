let clickedTime = 0;
let createdTime = 0;
let reactionTime = 0;


function makeBox(){

  let x = Math.random() * 5000;
  x = Math.floor(x);

  setTimeout(function() {
    document.getElementById("box").style.visibility ="visible";
    document.getElementById("box").style.backgroundColor = randomColor();
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


document.getElementById("box").onclick=function(){
  clickedTime = Date.now();
  reactionTime = (clickedTime - createdTime)/ 1000;
  document.getElementById("time").innerHTML = reactionTime;
  this.style.visibility = "hidden";
  makeBox();
};

makeBox();
