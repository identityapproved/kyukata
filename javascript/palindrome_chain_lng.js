/* Write a function which takes a positive integer and returns the number of special steps needed to obtain a palindrome.The special step is: "reverse the digits, and add to the original number".If the resulting number is not a palindrome, repeat the procedure with the sum until the resulting number is a palindrome.

If the input number is already a palindrome, the number of steps is 0. */

var palindromeChainLength = function (n) {
   const reverseNums = (number) => +number.toString().split('').reverse().join('');

   const isPalindrome = (number) => {
      return number === reverseNums(number)
   }

   let count = 0
   let currentNum = n

   while (!isPalindrome(currentNum)) {
      currentNum = reverseNums(currentNum) + currentNum;
      count++
   }
   return count;
};


console.log(palindromeChainLength(1)) //0);
console.log(palindromeChainLength(88)) // 0);
console.log(palindromeChainLength(87)) // 4);
console.log(palindromeChainLength(89)) // 24);
console.log(palindromeChainLength(10)) // 1);