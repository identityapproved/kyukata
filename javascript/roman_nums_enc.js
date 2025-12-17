/* Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.

Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1, 000
*/

/* function solution(number) {
   const lookUp = {
      1: 'I',
      4: 'IV',
      5: 'V',
      9: 'IX',
      10: 'X',
      40: 'XL',
      50: 'L',
      90: 'XC',
      100: 'C',
      400: 'CD',
      500: 'D',
      600: 'DC',
      900: 'CM',
      1000: 'M',
   };

   let roman = '';
   const keys = Object.keys(lookUp);

   while (number > 0) {
      for (let i = keys.length - 1; i >= 0; i--) {
         let romanLetter = keys[i];
         if (number >= romanLetter) {
            roman += lookUp[romanLetter];
            number -= romanLetter;
            break;
         }
      }
   }
   return roman;
} */

function solution(number, roman = '') {
   const lookUp = {
      'M': 1000,
      'CM': 900,
      'D': 500,
      'CD': 400,
      'C': 100,
      'XC': 90,
      'L': 50,
      'XL': 40,
      'X': 10,
      'IX': 9,
      'V': 5,
      'IV': 4,
      'I': 1,
   };

   /*    for (const key in lookUp) {
         if (number >= lookUp[key]) {
            if (number !== 0) {
               return solution(number - lookUp[key], roman + key);
            }
         }
      } */

   while (number > 0) {
      for (const key in lookUp) {
         if (number >= lookUp[key]) {
            roman += key;
            number -= lookUp[key];
            break;
         }
      }
   }

   return roman;
}

console.log(solution(1992))
console.log(solution(1))//'I', '1 should, "I"')
console.log(solution(2))//'II', '2 should, "II"')
console.log(solution(3))//'III', '3 should, "III"')cd 
console.log(solution(4))//'IV', '4 should, "IV"')
console.log(solution(5))//'V', '5 should, "V"')
console.log(solution(9))//'IX', '9 should, "IX"')
console.log(solution(10))// 'X', '10 should, "X"')
console.log(solution(11))// 'XI')
console.log(solution(19))// 'XIX')
console.log(solution(22))// 'XXII')
console.log(solution(15))// 'XV')