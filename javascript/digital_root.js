/* Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n.If that value has more than one digit, continue reducing in this way until a single - digit number is produced.The input will be a non - negative integer. */

/* function digital_root(n) {
   const oneOf = n.toString().split('')
   const lastOne = oneOf.reduce((acc, curr) => acc + Number(curr), 0)
   if (lastOne >= 10) {
      return digital_root(lastOne);
   }
   return lastOne;
} */

function digital_root(n) {
   if (n >= 10) {
      n = n.toString().split('').reduce((acc, curr) => acc + Number(curr), 0)
      return digital_root(n);
   }
   return n;
}

/* function digital_root(n) {
   while (n > 9) {
      let sum = 0
      while (n > 0) {
         const last = n % 10;
         n = Math.floor(n / 10)
         console.log("~ last", last)
         console.log("~ n", n)
         sum += last;
         console.log("~ sum", sum)
      }
      n = sum
   }
   return n
} */

/* function digital_root(n) {
   while (n > 9) {
      n = n.toString().split('').reduce((acc, curr) => acc + Number(curr), 0)
   }
   return n;
} */

console.log(digital_root(16))// 7)
console.log(digital_root(456))// 6)
console.log(digital_root(4555558))