// create a variable named kelvin, and set it equal to 293
const kelvin = 0;

// convert Kelvin to Celsius by subtracting 273 from the kelvin variable. Store the result in another variable, named celsius
let celsius = kelvin - 273;

// use this equation to calculate Fahrenheit, then store the answer in a variable named fahrenheit -> Fahrenheit = Celsius * (9/5) + 32. Choose the variable type that allows you to change its value.
let fahrenheit = celsius * (9/5) + 32;

//use the .floor() method from the built-in Math object to round down the Fahrenheit temperature. Save the result to the fahrenheit variable.
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

//convert celsius to the Newton
let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The result is ${newton}`);