/* Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers.No floats or non - positive integers will be passed. */

function sumTwoSmallestNumbers(numbers) {
   numbers.sort((a, b) => a - b)
   return (numbers[0] + numbers[1]);
}

/* function sumTwoSmallestNumbers(numbers) {
   let smallest;
   let secondSmallest;

   if (numbers[0] < numbers[1]) {
      smallest = numbers[0]
      secondSmallest = numbers[1]
   } else {
      smallest = numbers[1]
      secondSmallest = numbers[0]
   }

   for (let i = 2; i < numbers.length; i++) {
      const currentNum = numbers[i];

      if (currentNum < smallest) {
         secondSmallest = smallest;
         smallest = currentNum;
      } else if (currentNum < secondSmallest) {
         secondSmallest = currentNum;
      }
   }

   return (smallest + secondSmallest);
} */

/* function sumTwoSmallestNumbers(numbers) {
   // const smallest = Math.min.apply(null, numbers);
   const smallest = Math.min(...numbers);
   const indOfSmallest = numbers.indexOf(smallest);
   const numbersWithoutSmallest = numbers.slice();
   numbersWithoutSmallest.splice(indOfSmallest, 1);
   // const secondSmallest = Math.min.apply(null, numbersWithoutSmallest);
   const secondSmallest = Math.min(...numbersWithoutSmallest);

   // const secondSmallest = Math.min.apply(null, numbers.filter(num => num !== smallest))
   return (smallest + secondSmallest);
} */

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22])); // 13, "Sum should be 13");
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43])); // 6, "Sum should be 6");
console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7])); // 10, "Sum should be 10");
console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1])); // 24, "Sum should be 24");
console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4])); // 16, "Sum should be 16");