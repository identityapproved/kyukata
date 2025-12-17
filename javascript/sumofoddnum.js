/* Given the triangle of consecutive odd numbers:

				 1
			 3     5
		 7     9    11
	13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8

*/

/* 
function rowSumOddNumbers(n) {
	return Math.pow(n, 3)
}
 */

/* function rowSumOddNumbers(n) {
	let currentRowNum = 1;
	let rowNumbers = []
	let counter = 1;

	while (currentRowNum <= n) {
		if (counter % 2 !== 0) {
			rowNumbers.push(counter)
			if (rowNumbers.length === currentRowNum) {
				if (currentRowNum !== n) {
					rowNumbers = []
				}
				currentRowNum++
			}
		}

		counter++
	}

	return rowNumbers.reduce((sum, n) => sum + n)
} */

function rowSumOddNumbers(n) {
	let currentRowNum = 1;
	let rowNumbers = []
	let counter = 1;
	let sum = 0

	while (currentRowNum <= n) {
		rowNumbers.push(counter)
		sum += counter;

		if (rowNumbers.length === currentRowNum) {
			if (currentRowNum !== n) {
				rowNumbers = []
				sum = 0
			}
			currentRowNum++
		}
		counter += 2
	}

	return sum
}

/* function rowSumOddNumbers(n) {
	let sum = 0;
	let current = n * (n - 1) + 1;

	for (let i = 0; i < n; i++) {
		sum += current;
		current += 2;
	}

	return sum
} */
/* 
function rowSumOddNumbers(n) {
	let sum = 0;
	let current = n * (n - 1) + 1;

	for (let i = 0; i < n; i++) {
		sum += n * (n - 1) + (1 + 2 * i);
	}

	return sum
}
 */
/* 
function rowSumOddNumbers(n) {
	return Array.from({ length: n }).reduce((sum, _, i) => sum += n * (n - 1) + (1 + 2 * i), 0)
}
 */
console.log(rowSumOddNumbers(1)) // 1;
console.log(rowSumOddNumbers(2)) // 8;
console.log(rowSumOddNumbers(42)) // 74088;

