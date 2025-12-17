// https://www.codewars.com/kata/544aed4c4a30184e960010f4

/* Create a function named divisors / Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust). */
/* 
function divisors(integer) {
   const result = []

   for (let i = 2; i < integer; i++) {
      if (integer % i === 0) {
         result.push(i)
      }
   }

   if (result.length === 0) {
      return `${integer} is prime`
   } else {
      return result
   }
};
 */
/* 
function divisors(integer) {
   const result = []

   Array.from({ length: integer }, (_, i) => {
      if (integer % i === 0 && i !== 1) {
         result.push(i)
      }

   })
   return result
};
 */

/* 
function divisors(integer) {
   Array.from({ length: integer - 2 }).reduce((result, _, i) => {
      console.log("~ result", result)
      if (integer % i === 0 && i !== 1) {
         result.push(i)
      }
      return result.length === 0 ? `${integer} is prime` : result
   }, [])
};
 */
/* function divisors(integer) {
   const arr = Array.from({ length: integer }).reduce((results, _, i) => {
      if (integer % i == 0 && i !== 1) {
         results.push(i)
      } else if (i == integer - 3 && results.length == 0) {
         return `${integer} is prime`
      }
      return results
   }, []);
   return arr
}; */

function divisors(integer) {
   const arr = Array.from({ length: integer }).reduce((results, _, i) => {
      if (integer % i == 0 && i !== 1) {
         results.push(i)
      }
      return results
   }, []);
   return arr.length ? arr : `${integer} is prime`
};

console.log(divisors(15), [3, 5]);
console.log(divisors(12), [2, 3, 4, 6]);
console.log(divisors(13), "13 is prime");