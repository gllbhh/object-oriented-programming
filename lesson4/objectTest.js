a = {
	name: "John",
	surname: "Doe",
	year: 2000,
	someShit: [0, 12, 42],
};

for (property in a) {
	console.log(property);
	console.log(a[property]);
}

class Student {
	constructor(name, age, city) {
		(this.name = name),
			(this.age = age),
			(this.city = city),
			(this.studentID = Math.floor(Math.random() * 1000));
	}
	// methods
	printStudent() {
		console.log(
			`Name: ${this.name}, Age: ${this.age}, City: ${this.city}, ID: ${this.studentID}`
		);
	}
}

let student1 = new Student("Glen", 32, "Oulu");
let student2 = new Student("John", 22, "Helsinki");
let student3 = new Student("Jane", 25, "Tampere");
console.log(student1);
console.log(student2);
student3.printStudent();
