/* function maskify(cc) {
   let masked = "";

   for (let i = cc.length - 1; i >= 0; i--) {
      const letter = cc[i];
      if (i > cc.length - 5) {
         masked = letter + masked;
      } else {
         masked = "#" + masked;
      }
   }
   return masked;
} */

/* function maskify(cc) {
   let masked = "";

   for (let i = 0; i < cc.length; i++) {
      const letter = cc[i];
      if (i < cc.length - 4) {
         masked += '#';
      } else {
         masked += letter;
      }
   }
   return masked;
} */

/* function maskify(cc) {
   return cc.split('').map((num, index, array) => {
      if (index < array.length - 4) {
         return '#'
      } else { return num }
   }).join('')
} */

function maskify(cc) {
   return cc.replace(/.(?=.{4})/g, '#')
}

// clever 
/* function maskify(cc) {
   return cc.slice(-4).padStart(cc.length, '#')
} */

console.log(maskify('4556364607935616')) // '############5616');
console.log(maskify('1')) // '1');
console.log(maskify('11111')) // '#1111');