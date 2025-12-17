// https://www.codewars.com/kata/520446778469526ec0000001

/* Complete the function/method (depending on the language) to return true/True when its argument is an array that has the same nesting structures and same corresponding length of nested arrays as the first array. */

// Return 'true' if and only if 'other' has the same
// nesting structure as 'this'.

// Note: You are given a function isArray(o) that returns
// whether its argument is an array.

Array.prototype.sameStructureAs = function (other) {
   if (!isArray(other) || this.length != other.length) return false

   for (let i = 0; i < this.length; i++) {
      if (Array.isArray(this[i]) && !this[i].sameStructureAs(other[i])) {
         return false
      } else if (!Array.isArray(this[i]) && Array.isArray(other[i])) {
         return false
      }
   }
   return true
};

/* Array.prototype.sameStructureAs = function (other) {
   if (!isArray(other) || this.length != other.length) return false

   return this.every((element, i) => {
      const otherElement = other[i]

      if (isArray(element) && !element.sameStructureAs(otherElement)) {
         return false
      } else if (!isArray(element) && isArray(otherElement)) {
         return false
      }
      return true
   })
} */

// should return true
console.log([1, 1, 1].sameStructureAs([2, 2, 2]))
console.log([1, [1, 1]].sameStructureAs([2, [2, 2]]))

// should return false 
console.log([1, [1, 1]].sameStructureAs([[2, 2], 2]))
console.log([1, [1, 1]].sameStructureAs([[2], 2]))

// should return true
console.log([[[], []]].sameStructureAs([[[], []]]))

// should return false
console.log([[[], []]].sameStructureAs([[1, 1]]))   