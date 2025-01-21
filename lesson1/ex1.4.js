function average(numbers) {
	// variable for sum
	let sum = 0;

	// caclulate sum using for loop
	for (let number of numbers) {
		sum += number;
	}

	// calculate average
	let average = sum / numbers.length;

	// return average
	return average;
}

// numbers to pass to the function
const numbers = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89],
	numbers1 = [50, 20, 100, 5];

// print out the result
console.log("Average: " + average(numbers).toFixed(2));
console.log("Average: " + average(numbers1).toFixed(2));
