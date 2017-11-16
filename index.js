let clickedTime = 0;
let createdTime = 0;
let reactionTime = 0;


function makeBox(){

  let x = Math.random() * 5000;
  x = Math.floor(x);

  setTimeout(function() {
    document.getElementById("box").style.visibility ="visible";
    createdTime = Date.now();
  }, x);
}

document.getElementById("box").onclick=function(){
  clickedTime = Date.now();
  reactionTime = (clickedTime - createdTime)/ 1000;
  document.getElementById("time").innerHTML = reactionTime;
  this.style.visibility = "hidden";
  makeBox();
};

makeBox();
