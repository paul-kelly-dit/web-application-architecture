const readline = require("readline");

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    //The maximum and minimum is inclusive
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// We want the player to have 3 tries
let tries = 3;

// We want to player to guess numbers from 1 to 10
let randomNumber = getRandomIntInclusive(1, 10);

rl.setPrompt("Guess the number! (1-10): ");
rl.prompt();
rl.on("line", function (answer) {
    tries--;
    game(tries, randomNumber, answer);
    rl.prompt();
});

function game(tries, randomNumber, guess) {
    console.log("TODO : Your implementation goes here..");

}