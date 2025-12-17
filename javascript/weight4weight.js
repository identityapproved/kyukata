/* The weight of a number will be from now on the sum of its digits.

For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99.

Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers ?

Example :
"56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes:

"100 180 90 56 65 74 68 86 99" */
/* 
function orderWeight(strng) {
	const numbers = strng.split(/\s+/)
	const sumDigits = (num) => num.toString().split('').reduce((sums, digit) => sums + +digit, 0)
	return numbers.sort((a, b) => {
		const weightA = sumDigits(a)
		const weightB = sumDigits(b)

		if (weightA > weightB) return 1
		if (weightA < weightB) return -1
		if (a < b) return -1
		if (a > b) return 1
	}).join(' ')
}
 */
function orderWeight(strng) {
	const sumDigits = (num) => Array.prototype.reduce.call(num.toString(), (sums, digit) => sums + +digit, 0)
	return strng.split(/\s+/).sort((a, b) => {
		const weightA = sumDigits(a)
		const weightB = sumDigits(b)
		return (weightA > weightB) ? 1 : (weightA < weightB) ? -1 : (a < b) ? -1 : (a > b) ? 1 : 0
	}).join(' ')
}

console.log(orderWeight("103 123 4444 99 2000"), "2000 103 123 4444 99")
console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"), "11 11 2000 10003 22 123 1234000 44444444 9999")