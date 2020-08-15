// create a variable named myAge
const myAge = 24;

//create a variable named earlyYears
let earlyYears = 2;
earlyYears *= 10.5;

//take myAge variable, and subtract 2 from it
let laterYears = myAge - 2;

//multifly the laterYears variable by 4 to calculate the number of dog years accounted for by your later years
laterYears *= 4;

//add earlyYears and laterYears together, and store that in a variable named myAgeInDogYears
const myAgeInDogYears = earlyYears + laterYears;

//write your name as a string, call its built-in method .toLowerCase(), and store the result in a variable called myName
let myName = 'Nhan';
myName = myName.toLowerCase();

//result
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
