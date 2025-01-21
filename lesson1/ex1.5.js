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

// an array of objects
// inside an object there is a key/value pairs that can beaccessed with .name
const students = [
	{ name: "Joe", scores: [4, 4, 5, 5, 4] },
	{ name: "Lisa", scores: [5, 5, 4, 5, 5] },
	{ name: "Max", scores: [3, 4, 3, 2, 3] },
];

// calculate and print out GPA for every student
for (let student of students) {
	let gpa = average(student.scores);
	console.log(student.name + "'s GPA is " + gpa);
}
