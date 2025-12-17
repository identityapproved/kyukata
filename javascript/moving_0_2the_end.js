/* Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements. */

const moveZeros = function (arr) {
   for (let i = 0; i < arr.length; i++) {
      const el = arr[i];
      const ind = arr.indexOf(el)
      if (el === 0) {
         arr.splice(ind, 1)
         arr.push(el)
      }
   }
   return arr
}

/* const moveZeros = function (arr) {
   const movedZeros = []
   let zeroCount = 0

   for (let i = 0; i < arr.length; i++) {
      const value = arr[i];
      if (value !== 0) {
         movedZeros.push(value)
      } else {
         zeroCount++
      }
   }

   for (let i = 0; i < zeroCount; i++) {
      movedZeros.push(0)
   }
   return movedZeros
} */

/* const moveZeros = function (arr) {
   let zeroCount = 0

   const movedZeros = arr.reduce((movedZeros, value, index) => {
      if (value !== 0) {
         movedZeros[index - zeroCount] = value
      } else {
         zeroCount++
      }
      return movedZeros
   }, new Array(arr.length).fill(0));

   return movedZeros;
} */



console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]))
console.log(moveZeros([1, 2, 1, 1, 3, 1, 0, 0, 0, 0]))