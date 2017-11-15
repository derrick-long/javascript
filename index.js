function makeBox(){
  let x = Math.random() * 5000;
  x = Math.floor(x);

  setTimeout(function() {
    document.getElementById("box").style.visibility ="visible";
  }, x);
}

document.getElementById("box").onclick=function(){
  this.style.visibility = "hidden";
  makeBox();
};

makeBox();
