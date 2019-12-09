// Random number generator

var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;

// Dice 1 attribute

var randomDice1 = "images/dice" + randomNumber1 + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDice1);


// Dice 2 attribute

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDice2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomDice2);

// Title text

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "<i class='flag fas fa-flag'></i> Player 1 Wins!";
}

else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "<i class='flag fas fa-flag'></i> Player 2 Wins!";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
