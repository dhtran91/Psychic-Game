

//Array that consist of 26 characters ranging from index 0 - 25
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Generate a number between 0 - 25
var rand = Math.floor(Math.random() * 25);
console.log(alphabet[rand]);
var numOfGuesses = 10;
var win = 0;
var loss = 0;
var guesses = [];


document.getElementById("numOfGuesses").innerHTML = numOfGuesses;
document.getElementById("guesses").innerHTML = guesses;
document.getElementById("win").innerHTML = win;
document.getElementById("loss").innerHTML = loss;

    

while (numOfGuesses !== 0) {

    userInput = prompt("What letter?");
    console.log(userInput);
    if (alphabet[rand] === userInput) {
        console.log("You win");
        win++;
        numOfGuesses = 0;
    } 
    else {
    guesses.push(userInput);
    numOfGuesses--;
    if (numOfGuesses == 0) {
        loss++;
    }
    }
    console.log(win);
    console.log(loss);
    console.log(numOfGuesses);
}







