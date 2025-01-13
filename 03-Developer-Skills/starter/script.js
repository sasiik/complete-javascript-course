// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// const measureKelvin = function () {
// 	const measurement = {
// 		type: "temp",
// 		unit: "celsius",
// 		value: Number(prompt("Degrees celsius:")),
// 	};

// 	const kelvin = measurement.value + 273;
// 	return kelvin;
// };

// console.log(measureKelvin());

// 1. what values are in the array? only numbers
// 2. how to de implement the counter? with for cycle, +1 for each i
// 3. how to we show the celsium sign? just copy from the internet
// 4. how do i display only 1 string? just use .join() for the array in which we push the substrings

const printForecast = function (tempArr) {
	const res = [];
	for (let i = 0; i < tempArr.length; i++) {
		if (typeof tempArr[i] !== "number") continue;
		res.push(`${tempArr[i]}°C in ${i + 1} days`);
	}
	return "... " + res.join(" ... ") + " ...";
};

console.log(printForecast([17, 21, 23]));
