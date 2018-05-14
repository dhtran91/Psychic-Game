//Array that consist of 26 characters ranging from index 0 - 25
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Generate a number between 0 - 25
var rand = Math.floor(Math.random() * 25);

//Just to see what the random letter is
console.log(alphabet[rand]);

//Setting global variables
var numOfGuesses = 10;
var win = 0;
var loss = 0;
var guesses;
var keysPressed = [];
var winText = document.getElementById("win");
var lossText = document.getElementById("loss");
var numOfGuessesText = document.getElementById("numOfGuesses");
var guessText = document.getElementById("guesses");
var correctLetterText = document.getElementById("correctLetter");

//Displaying inital variables to html
winText.textContent = win;
lossText.textContent = loss;
numOfGuessesText.textContent = numOfGuesses;

function reset() {
correctLetterText.textContent = correctLetter;
this.numOfGuesses = 10;
this.rand = Math.floor(Math.random() * 25);
guessText.textContent = "";
console.log(alphabet[rand]);
keysPressed = [];
};

document.onkeypress = function (event) {
numOfGuesses--;
numOfGuessesText.textContent = numOfGuesses;
correctLetterText.textContent = "";
correctLetter = alphabet[rand];

var keyPressed = event.key;

//Can't push event
// keysPressed = keysPressed.push(keyPressed);

// for (var i = 0; i < keysPressed.length; i++) {
//     if (keysPressed[i] === keyPressed) {
//         keyPressed = "";
//     } else {
        
//     }
// };

guessText.textContent += keyPressed + " ";

if (numOfGuesses >= 0 && correctLetter === keyPressed) {
    win++;
    winText.textContent = win;
    reset();
}
else if (numOfGuesses === 0) {
    loss++;
    lossText.textContent = loss;
    reset();
}
}