let raceNumber = Math.floor(Math.random() * 1000);
console.log(raceNumber);
//Create a variable that indicates whether a runner registered early or not.
let runnerEarly = raceNumber > 1000;
console.log(runnerEarly);
// Create a variable for the runner’s age and set it equal to a number
let runnerAge = 18;
//Create a control flow statement that checks whether the runner is an adult AND registered early.
if (raceNumber > 18 && runnerEarly === true) {
  console.log(raceNumber = 1000);
}
//Create a separate control flow statement below the first (starting with if again). This statement will check age and registration time to determine race time.
if (runnerAge > 18 && runnerEarly === true) {
  console.log(`You will race at 9:30am and your racenumber is ${raceNumber}`);
} else if (runnerAge > 18 && runnerEarly !== true) {
  console.log(`You will race at 11:00am and your racenumber is ${raceNumber}`);
}
//“Youth registrants run at 12:30 pm (regardless of registration)”
if (runnerAge < 18) {
  console.log(`Youth registrants run at 12:30 pm and your race number is ${raceNumber}`);
} else {
  console.log('See the registratio desk');
}
