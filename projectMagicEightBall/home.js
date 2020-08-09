//define a variable called userName that is set to an empty string.
let userName = 'Nhan';

//create a ternary expression that decides what to do if the user enters a name or not.
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

//Create a variable named userQuestion
let userQuestion = 'What is your name?';

//Write a console.log() for the userQuestion, stating what was asked
console.log(`The user asked: ${userQuestion}`);

//We need to generate a random number between 0 and 7.
let randomNumber = Math.floor(Math.random() * 8);

//Create one more variable named eightBall
let eightBall = randomNumber;

//Think about utilizing if/else or switch statements.
switch (eightBall) {
  case 0 :
  eightBall = 'It is certain'
  break;
  case 2 :
  eightBall = 'It is decidedly so'
  break;
  case 3 :
  eightBall = 'Reply hazy try again'
  break;
  case 4 :
  eightBall = 'Cannot predict now'
  break;
  case 5 :
  eightBall = 'Do not count on it'
  break;
  case 6 :
  eightBall = 'My sources say no'
  break;
  case 7 :
  eightBall = 'Outlook not so good'
  break;
  case 8 :
  eightBall = 'Signs point to yes'
  break;
  case 1 :
  break;
}
console.log(`The eight ball answered: ${eightBall}`);