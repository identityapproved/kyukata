/* Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times. */

/* function findOdd(array) {
   const counts = {};

   for (let i = 0; i < array.length; i++) {
      const currNum = array[i];
      if (!counts[currNum]) {
         counts[currNum] = 1;
      } else {
         counts[currNum]++;
      }
   }

   for (const number in counts) {
      const num = counts[number];
      if (num % 2 !== 0) {
         return Number(number)
      }
   }
} */

function findOdd(array) {
   const counts = array.reduce((counts, currNum) => {
      counts[currNum] ? counts[currNum]++ : counts[currNum] = 1

      /* counts[currNum] = counts[currNum] || 0;
      counts[currNum]++ */


      /*  if (!counts[currNum]) {
          counts[currNum] = 1;
       } else {
          counts[currNum]++;
       } */
      return counts;
   }, {})

   const numbers = Object.keys(counts);

   const oddIndex = numbers.findIndex((number) => {
      const num = counts[number];
      return num % 2 !== 0;
   })

   return Number(numbers[oddIndex])
};

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]))// 5);
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]))// -1);
console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]))// 5);
console.log(findOdd([10]))// 10);
console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]))// 10);
console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]))// 1);