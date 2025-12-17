// KATA Create phone number

// Write a function that accepts an array of 10 integers(between 0 and 9), that returns a string of those numbers in the form of a phone number.

/* function createPhoneNumber(numbers) {
   return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
} */

/* function createPhoneNumber(numbers) {
   return `(${numbers.slice(0, 3).join('')}) ${numbers.slice(3, 6).join('')}-${numbers.slice(6).join('')}`
}; */

function createPhoneNumber(numbers) {
   return numbers.join('').replace(/([\d]{3})([\d]{3})([\d]{4})/, '($1) $2-$3')
};

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])) // "(123) 456-7890";
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])) // "(111) 111-1111";