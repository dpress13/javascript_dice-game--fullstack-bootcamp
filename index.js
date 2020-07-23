var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

function allFunctions() {
    rollDice(randomNumber1, randomNumber2);
    winner();
}

function rollDice(randomNumber1, randomNumber2) {
    document.querySelector("img.img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
    document.querySelector("img.img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");
}

function winner() {
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerText = "Player 1 Wins! 🚩";
    } else if (randomNumber1 < randomNumber2) {
        document. querySelector("h1").innerText = "🚩Player 2 Wins!";
    } else {
        document.querySelector("h1").innerText = "🚩It's A Draw!";
    }
}
allFunctions();
