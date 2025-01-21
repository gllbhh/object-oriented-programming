// numbers are stored in an array
const numbers = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];

// variable for sum
let sum = 0;

// caclulate sum using for loop
for (let number of numbers) {
	sum += number;
}

// calculate average
let average = sum / numbers.length;

// print the result
console.log("Average is " + average.toFixed(2));
