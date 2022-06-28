
var randomNum1 =Math.floor(Math.random()*6) + 1;

var imgSource1 = "images/dice" + randomNum1 + ".png";

document.querySelector(".img1").setAttribute("src",imgSource1);


var randomNum2 = Math.floor(Math.random()*6) + 1;

var imgSource2 = "images/dice" + randomNum2 + ".png";

document.querySelector(".img2").setAttribute("src",imgSource2);


//If player 1 wins
if (randomNum1 > randomNum2){
  document.querySelector("h1").innerHTML = "Player 1 wins !"
}
else if (randomNum1 < randomNum2){
  document.querySelector("h1").innerHTML = "Player 2 wins !"
}
else{
  document.querySelector("h1").innerHTML = "Draw!"
}
