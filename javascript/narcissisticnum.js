// https://www.codewars.com/kata/5287e858c6b5a9678200083c

/* A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base.In this Kata, we will restrict ourselves to decimal(base 10).

For example, take 153(3 digits), which is narcisstic:
1 ^ 3 + 5 ^ 3 + 3 ^ 3 = 1 + 125 + 27 = 153

and 1652(4 digits), which isn't:
1 ^ 4 + 6 ^ 4 + 5 ^ 4 + 2 ^ 4 = 1 + 1296 + 625 + 16 = 1938 */

/* function narcissistic(value) {
   const numLength = Math.floor(Math.log10(Math.abs(value))) + 1
   console.log("~ numLength", numLength)

   let sum = 0
   let digits = value

   while (digits > 0) {
      const digit = digits % 10
      console.log("~ digit", digit)
      sum += Math.pow(digit, numLength)
      console.log("~ sum", sum)
      digits = Math.floor(digits / 10)
      console.log("~ digits in while", digits)
   }

   return sum === value
}
 */
function narcissistic(value) {
   return value.toString().split('').reduce((sum, digit, i, { length }) => {
      return sum += Math.pow(digit, length)
   }, 0) === value
}

console.log(narcissistic(7), true, "7 is narcissistic");

console.log(narcissistic(371), true, "371 is narcissistic");

console.log(narcissistic(153), true, "153 is narcissistic");

console.log(narcissistic(1634), true, "1634 is narcissistic");

console.log(narcissistic(23), false, "23 isn't narcissistic");