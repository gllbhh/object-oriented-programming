// store numbers in constants
const a = 32,
	b = 42,
	c = 54,
	d = 31,
	e = 50;
// the number of numbers
const count = 5;

// variable sum to store the sum of all numbers
let sum = a + b + c + d + e;

// calculate average
let average = sum / count;

//print out the result rounded to 2 numbers after the decimal point
console.log("Average is " + average.toFixed(2));
