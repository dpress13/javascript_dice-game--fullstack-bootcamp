// Create two random numbers <= 6
const randomNum1 = Math.floor(Math.random() * 6) + 1;
const randomNum2 = Math.floor(Math.random() * 6) + 1;

// Replace respective players' dice with the image that matches its random number
const rollDice = (randomNum1, randomNum2) => {
    document.getElementById("player1").setAttribute("src", "images/dice" + randomNum1 + ".png");
    document.getElementById("player2").setAttribute("src", "images/dice" + randomNum2 + ".png");
}

// Print which player is the winner
const winner = () => {
    if (randomNum1 > randomNum2) {
        document.querySelector("h1").innerText = "🚩Player 1 Wins!";
    } else if (randomNum1 < randomNum2) {
        document. querySelector("h1").innerText = "🚩Player 2 Wins!";
    } else {
        document.querySelector("h1").innerText = "🚩It's A Draw!";
    }
}

// Roll dice and print which player is the winner
const allFunctions = () => {
    rollDice(randomNum1, randomNum2);
    winner();
}

allFunctions();