// // const friend1 = "Michael";
// // const friend2 = "Steven";
// // const friend3 = "Peter";

// // const friends = ["Michael", "Steven", "Peter"];
// // console.log(friends);

// // const years = new Array(1991, 2004, 1984, 2020);

// // console.log(friends[0]);
// // console.log(friends[2]);

// // console.log(friends.length);
// // console.log(friends[friends.length - 1]);

// // friends[2] = "Jay";
// // console.log(friends);

// // const calcAge = function (birthYear) {
// // 	return 2037 - birthYear;
// // };
// // const firstName = "Jonas";
// // const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
// // console.log(calcAge(jonas));

// // const age1 = calcAge(years[0]);
// // const age2 = calcAge(years[1]);
// // const age3 = calcAge(years[years.length - 1]);
// // console.log(age1, age2, age3);

// // const ages = ["Michael", "Steven", "Peter"];
// // const friends = ["Michael", "Steven", "Peter"];
// // const newLength = friends.push("Jay");

// // console.log(friends);
// // console.log(newLength);

// // friends.unshift("John");
// // console.log(friends);

// // friends.pop();
// // const popped = friends.pop();
// // console.log(popped);
// // console.log(friends);

// // friends.shift();
// // console.log(friends);
// // console.log(friends.indexOf("Steven"));
// // console.log(friends.indexOf("Bob"));

// // console.log(friends.includes("Steven"));
// // console.log(friends.includes("Bob"));

// // if (friends.includes("Peter")) {
// // 	console.log("You have a friend called Peter");
// // }

// // challenge

// // const calcTip = function (bill) {
// // 	return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// // };

// // const bills = [125, 555, 44];
// // const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// // const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// // console.log(bills, tips, totals);

// // const jonasArray = [
// // 	"Jonas",
// // 	"Schmedtmann",
// // 	2037 - 1991,
// // 	"teacher",
// // 	["Michael", "Peter", "Steven"],
// // ];

// // const jonas = {
// // 	firstName: "Jonas",
// // 	lastName: "Schmedtmann",
// // 	age: 2037 - 1991,
// // 	job: "teacher",
// // 	friends: ["Michael", "Peter", "Steven"],
// // };

// // console.log(jonas.lastName);
// // console.log(jonas["lastName"]);
// // const interestedIn = "lastName";
// // if (jonas[interestedIn]) {
// // 	console.log(jonas[interestedIn]);
// // } else {
// // 	console.log("Wrong request");
// // }

// // jonas.location = "Portugal";
// // jonas["twitter"] = "@jonasschmedtmann";
// // console.log(jonas);
// // console.log(
// // 	`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
// // );

// // const jonas = {
// // 	firstName: "Jonas",
// // 	lastName: "Schmedtmann",
// // 	birthYear: 1991,
// // 	job: "teacher",
// // 	friends: ["Michael", "Peter", "Steven"],
// // 	hasDriversLicense: true,
// // 	calcAge: function () {
// // 		this.age = 2037 - this.birthYear;
// // 		return;
// // 	},
// // 	getSummary: function () {
// // 		return `${this.firstName} is a ${
// // 			this.age
// // 		}-year old teacher, and he has ${
// // 			this.hasDriversLicense ? "a" : "no"
// // 		} driver's license`;
// // 	},
// // };

// // console.log(jonas.calcAge());

// // console.log(jonas.age);

// // console.log(jonas.getSummary());

// const mark = {
// 	fullName: "Mark Miller",
// 	mass: 78,
// 	height: 169,
// 	calcBMI: function () {
// 		this.BMI = this.mass / this.height ** 2;
// 		return this.bmi;
// 	},
// };

// mark.calcBMI();

// const john = {
// 	fullName: "John Smith",
// 	mass: 92,
// 	height: 195,
// 	calcBMI: function () {
// 		this.BMI = this.mass / this.height ** 2;
// 		return this.bmi;
// 	},
// };

// john.calcBMI();

// if (john.BMI > mark.BMI) {
// 	console.log(
// 		`${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s! (${mark.BMI})`
// 	);
// } else if (john.BMI == mark.BMI) {
// 	console.log(
// 		`Both BMIs are equal for ${john.fullName} and ${mark.fullName}! (${mark.BMI})`
// 	);
// } else {
// 	console.log(
// 		`${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s! (${john.BMI})`
// 	);
// }

// for (let rep = 1; rep <= 10; rep++) {
// 	console.log(`Lifting wrights repetition ${rep}`);
// }

// const john = {
// 	fullName: "John Smith",
// 	mass: 92,
// 	height: 195,
// 	calcBMI: mass / height ** 2,
// };

// const types = [];

// const jonas = [
// 	"Jonas",
// 	"Schmedtmann",
// 	2037 - 1991,
// 	"teacher",
// 	["Michael", "Peter", "Steven"],
// ];

// for (let i = 0; i < jonas.length; i++) {
// 	console.log(jonas[i], typeof jonas[i]);
// 	types.push(typeof jonas[i]);
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];

// for (let i = 0; i < years.length; i++) {
// 	ages.push(2037 - years[i]);
// }
// console.log(ages);

// console.log("--- ONLY STRINGS ---");
// for (let i = 0; i < jonas.length; i++) {
// 	if (typeof jonas[i] !== "string") continue;
// 	console.log(jonas[i], typeof jonas[i]);
// }

// console.log("--- BREAK WITH NUMBER ---");
// for (let i = 0; i < jonas.length; i++) {
// 	if (typeof jonas[i] !== "string") break;
// 	console.log(jonas[i], typeof jonas[i]);
// }

// const jonas = [
// 	"Jonas",
// 	"Schmedtmann",
// 	2037 - 1991,
// 	"teacher",
// 	["Michael", "Peter", "Steven"],
// ];

// for (let i = jonas.length - 1; i >= 0; i--) {
// 	console.log(i, jonas[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
// 	console.log(`------ STARTING EXERCISE ${exercise} ------`);
// 	for (let rep = 1; rep < 6; rep++) {
// 		console.log(`Lifting weight repetition ${rep}`);
// 	}
// }

// let rep = 1;
// while (rep <= 10) {
// 	console.log(`Lifting weights repetition ${rep}`);
// 	rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

// while (dice !== 6) {
// 	console.log(`You rolled a ${dice}!`);
// 	dice = Math.trunc(Math.random() * 6) + 1;
// 	if (dice === 6) console.log("Loop is about to end..");
// }

// const calcTip = function (bill) {
// 	return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
// 	const currBill = bills[i];
// 	const currTip = calcTip(currBill);
// 	tips.push(currTip);
// 	totals.push(currBill + currTip);
// }

// function calcAverage(arr) {
// 	sum = 0;
// 	for (let i = 0; i < arr.length; i++) {
// 		sum += arr[i];
// 	}
// 	return sum / arr.length;
// }

// console.log(bills);
// console.log(tips);
// console.log(totals);
// console.log(calcAverage(totals));
