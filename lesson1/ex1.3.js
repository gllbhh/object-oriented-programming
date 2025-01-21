/*
Create code which calculates the average GPA of a student who has completed the following courses with grades:
· Introduction to Programming – 5
· Computer Devices – 3
· Engineering English – 4
· Object Oriented Programming – 2
· Mathematics Primer – 4 
*/

const introductionToProgramming = 5,
	computerDevices = 3,
	engineeringEnglish = 4,
	objectOrientedProgramming = 2,
	mathematicsPrimer = 4;

const numberOfCourses = 5;
let sum =
	introductionToProgramming +
	computerDevices +
	engineeringEnglish +
	objectOrientedProgramming +
	mathematicsPrimer;
let average = sum / numberOfCourses;

console.log("Student GPA: " + average.toFixed(2));
