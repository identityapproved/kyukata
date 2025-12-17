/* Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered! */

function getSum(a, b) {
   const minNum = Math.min(a, b)
   const maxNum = Math.max(a, b)
   /* let begin
   let end
   if (a < b) {
      begin = a
      end = b
   } else {
      begin = b
      end = a
   } */
   let sum = 0;
   for (let i = minNum; i <= maxNum; i++) {
      sum += i;

   }
   return sum
}

function getSum(a, b) {
   const minNum = Math.min(a, b)
   const maxNum = Math.max(a, b)

   return new Array(Math.abs(maxNum - minNum) + 1).fill(0).reduce((sum, curr, index) => {
      sum += index + minNum;
      return sum;
   }, 0)
}

console.log(getSum(0, -1))// -1);
console.log(getSum(0, 1))// 1);
console.log(getSum(-3, 3))