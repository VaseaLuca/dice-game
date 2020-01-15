let randomNumber1 = Math.round(Math.random() * (5 - 1 + 1)) + 1; //random number 1-6 for img1
let randomNumber2 = Math.round(Math.random() * (5 - 1 + 1)) + 1; //random number 1-6 for img2

document.querySelector("img.img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelector("img.img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerText = "🚩Player 1 wins";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerText = "Player 2 wins 🚩";
} else {
  document.querySelector("h1").innerText = "You both win";
}
