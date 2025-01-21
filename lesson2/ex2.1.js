// decimal numbers
let x = 0.4 - 0.3,
	y = 0.5 - 0.4;
console.log(x, y);
console.log(x.toFixed(1) == y.toFixed(1));

// strings

// 1.
let firstName = "John",
	lastName = "Doe";

// concatenate
console.log(`${firstName} ${lastName}`);

// 2.
let str = "Hello World";
console.log(`The length of "Hello World" string is ${str.length} characters`);

// 3.
let name = "Max";
let slimShady = "My name is " + name;
console.log(slimShady);

// 4.
let javaS = "Javascript is fun";
console.log(javaS.substring(11, 13));

// 5.
let mixedCase = "MiXeD CaSe";
let lowecase = mixedCase.toLowerCase();
let uppercase = mixedCase.toUpperCase();
console.log(lowecase);
console.log(uppercase);

// 6.
let iLove = "I love JavaScript!";
console.log(iLove.replace("JavaScript", "coding"));
