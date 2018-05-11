

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

// document.getElementById("numOfGuesses").innerHTML = numOfGuesses;
// document.getElementById("guesses").innerHTML = guesses;
// document.getElementById("win").innerHTML = win;
// document.getElementById("loss").innerHTML = loss;

  
var keyStroke;
document.addEventListener('keypress', (event) => {
    keyStroke = event.key;
    alert("You pressed " + keyStroke);
});

while (numOfGuesses !== 0) {

    if (alphabet[rand] === keyStroke) {
        alert("You win");
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
    // console.log(win);
    // console.log(loss);
    // console.log(numOfGuesses);
}






