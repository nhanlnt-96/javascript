let raceNumber = Math.floor(Math.random() * 1000);
//Create a variable that indicates whether a runner registered early or not.
let earlyRunner = true;
//Create a variable for the runner’s age and set it equal to a number.
let runnerAge = 18;
//Create a control flow statement that checks whether the runner is an adult AND registered early.
if (earlyRunner && runnerAge > 18) {
  raceNumber += 1000;
}
//Create a separate control flow statement below the first (starting with if again). 
if (earlyRunner && runnerAge > 18) {
  console.log(`You will race at 9:30am, and your race number is ${raceNumber}.`);
} else if (!earlyRunner && runnerAge > 18) {
  console.log(`You will race at 11:00am, and your race number is ${raceNumber}.`);
} else if (runnerAge < 18) {
  console.log(`You will race at 12:30, and your race number is ${raceNumber}.`);
} else {
  console.log('See the registration desk, thanks!');
}