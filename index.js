var randomNumber1 = Math.random() * 6;
var randomNumber2 = Math.random() * 6;

randomNumber1 += 1;
randomNumber2 += 1;

randomNumber1 = Math.floor(randomNumber1);
randomNumber2 = Math.floor(randomNumber2);

console.log("randomNumber1 is " + randomNumber1);
console.log("randomNumber2 is " + randomNumber2);

var image1 = document.getElementsByClassName("img1")[0];
var image2 = document.getElementsByClassName("img2")[0];

var string1 = "images/dice"+randomNumber1+".png";
var string2 = "images/dice"+randomNumber2+".png";

console.log("First dice image path is " + string1);
console.log("Second dice image path is " + string2);

var heading = document.getElementsByClassName("container")[0].firstElementChild;

image1.setAttribute("src", string1);
image2.setAttribute("src", string2);

if(randomNumber1 < randomNumber2)
{
  //heading.innerHTML = "Player2 Wins";
  document.querySelector("h1").innerHTML = "Player2 Wins!";
}
else if(randomNumber1 > randomNumber2)
{
  //heading.innerHTML = "Player1 Wins";
  document.querySelector("h1").innerHTML = "Player1 Wins!";
}
else
{
  //heading.innerHTML = "Draw";
  document.querySelector("h1").innerHTML = "Draw!";
}
