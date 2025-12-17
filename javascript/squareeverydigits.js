// https://www.codewars.com/kata/546e2562b03326a88e000020

/* 
Welcome.In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer 
*/

/* function squareDigits(num) {
	if (num === 0) return 0;

	let squared = ''
	const splittedNum = num.toString().split('')

	splittedNum.forEach(num => {
		squared += (num ** 2)
	});

	return Number(squared)
} */

/* function squareDigits(num) {
	let squared = ''

	while (num > 0) {
		let digit = num % 10
		let squaredDigit = Math.pow(digit, 2)
		squared = squaredDigit + squared
		num = Math.floor(num / 10)
	}
	return +squared
} */

/* function squareDigits(num) {
	if (num === 0) return 0;
	return +num.toString().split('').map(digit => Math.pow(digit, 2)).join('')
} */

/* function squareDigits(num) {
	return +num.toString().split('').reduce((squared, digit) => {
		return squared += Math.pow(digit, 2) 
	}, '')
} */

function squareDigits(num) {
	return +Array.prototype.reduce.call(num.toString(), (squared, digit) => {
		return squared += Math.pow(digit, 2)
	}, '')
}

console.log(squareDigits(3212), 9414);
console.log(squareDigits(2112), 4114);
console.log(squareDigits(0), 0);
