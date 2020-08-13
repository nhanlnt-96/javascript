let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

//write your code below:
// Create a generateTarget() function. This function will be called at the start of each new round in order to generate the new secret target number.
function generateTarget() {
    Math.floor(Math.random() * 9);
}

//Create a compareGuesses() function. This function will be called each round to determine which guess is closest to the target number.
