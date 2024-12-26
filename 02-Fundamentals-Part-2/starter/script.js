"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive");

// function logger() {
// 	console.log("My name is Jonas");
// }

// // calling, running, invoking function
// logger(23);
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
// 	console.log(apples, oranges);
// 	const juice = `Juice with ${apples} apples and ${oranges} oranges`;
// 	return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// console.log(fruitProcessor(5, 0));

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);
// function calcAge1(currentYear, birthYear) {
// 	return currentYear - birthYear;
// }

// const age1 = calcAge1(2037, 1991);
// console.log(age1);

// const calcAge2 = function (currentYear, birthYear) {
// 	return currentYear - birthYear;
// };

// const age2 = calcAge2(2037, 1995);
// console.log(age1, age2);

// const calcAge = function (birthYear) {
// 	return 2037 - birthYear;
// };

// console.log(calcAge(991));

// const yearsUntilRetirement = (birthYear, firstName) => {
// 	const age = 2037 - birthYear;
// 	const yearsUntil = 65 - age;
// 	return `${firstName}, you have ${yearsUntil} years left until retirement.`;
// };

// console.log(yearsUntilRetirement(1991, `Bob`));

// function cutFruitPieces(fruit) {
// 	return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
// 	const applePieces = cutFruitPieces(apples);
// 	const orangePieces = cutFruitPieces(oranges);
// 	console.log(apples, oranges);
// 	const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
// 	return juice;
// }

// console.log(fruitProcessor(4, 3));

// const calcAge = function (birthYear) {
// 	return 2037 - birthYear;
// };

// const yearsUntilRetirement = (birthYear, firstName) => {
// 	const age = 2037 - birthYear;
// 	const yearsUntil = 65 - age;

// 	return retirement > 0
// 		? console.log(
// 				`Retirement will begin after ${yearsUntil} years for ${firstName}`
// 		  )
// 		: -1;
// };

const calcAverage = (scores) =>
	scores.reduce((acc, val) => acc + val, 0) / scores.length;

const checkWinner = function ({ avg1, teamName1 }, { avg2, teamName2 }) {
	if (avg1 >= 2 * avg2) {
		return `${teamName1} won: ${avg1} > ${avg2} in 2 times`;
	} else if (avg2 >= 2 * avg1) {
		return `${teamName2} won: ${avg2} > ${avg1} in 2 times`;
	} else {
		return "Nobody won: tie";
	}
};

console.log(
	checkWinner(
		{ avg1: calcAverage([44, 23, 71]), teamName1: "Koalas" },
		{ avg2: calcAverage([65, 54, 49]), teamName2: "Pandas" }
	)
);
console.log(
	checkWinner(
		{ avg1: calcAverage([85, 54, 41]), teamName1: "Koalas" },
		{ avg2: calcAverage([23, 34, 27]), teamName2: "Pandas" }
	)
);
