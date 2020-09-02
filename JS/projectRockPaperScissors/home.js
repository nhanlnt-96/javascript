const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
  return 'error';
  }
};

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
};

function determineWinner(userChoice,computerChoice) {
  if (userChoice === computerChoice) {
    return 'Tie!';
  } 
  
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer won!';
    } else {
      return 'User won';
    }
  }
  
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Computer won!';
    } else {
      return 'User won!';
    }
  }
  
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer won!';
    } else {
      return 'User won!';
    }
  }
};

function playGame() {
  const userChoice = getUserChoice('paper');
  const computerChoice = getComputerChoice();
  console.log(`You threw: ${userChoice}`);
  console.log(`Computer threw: ${computerChoice}`);
  console.log(determineWinner(userChoice,computerChoice));
};

console.log(playGame());