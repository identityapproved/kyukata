// https://www.codewars.com/kata/5264d2b162488dc400000001
/* 
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed(Just like the name of this Kata).Strings passed in will consist of only letters and spaces.Spaces will be included only when more than one word is present.

Examples: spinWords("Hey fellow warriors") => returns "Hey wollef sroirraw" spinWords("This is a test") => returns "This is a test" spinWords("This is another test")=> returns "This is rehtona test" 
*/

/* 
function spinWords(string) {
   const spinnedWord = []
   string.split(' ').map((word, i) => {
      if (word.length > 4) {
         const reversed = word.split('').reverse().join('')
         spinnedWord.push(reversed)
      } else spinnedWord.push(word)
   })
   return spinnedWord.join(' ').toString()
}
*/
/* 
function reverse(word) {
   return word.split('').reverse().join('')
}

function spinWords(string) {
   let spinnedWord = ''
   const words = string.split(' ')
   
   for (let i = 0; i < words.length; i++) {
      let word = words[i];
      if (word.length > 4) {
         word = reverse(word)
      }
      spinnedWord += ' ' + word
   }
   return spinnedWord.trim()
}
 */

function spinWords(string) {
   return string.split(' ').map((word) => {
      if (word.length > 4) {
         return word.split('').reverse().join('')
      }
      return word
   }).join(' ')
}

/* function spinWords(string) {
   return string.split(' ').reduce((reverted, word) => {
      if (word.length > 4) {
         word = word.split('').reverse().join('')
      }
      reverted += ' ' + word
      return reverted
   }, '').trim()
} */

/* function spinWords(string) {
   return string.replace(/\w{5,}/g, (word) => word.split('').reverse().join(''))
} */

console.log(spinWords("Welcome"), "emocleW");
console.log(spinWords("Hey fellow warriors"), "Hey wollef sroirraw");
console.log(spinWords("This is a test"), "This is a test");
console.log(spinWords("This is another test"), "This is rehtona test");
console.log(spinWords("You are almost to the last test"), "You are tsomla to the last test");
console.log(spinWords("Just kidding there is still one more"), "Just gniddik ereht is llits one more");
console.log(spinWords("Seriously this is the last one"), "ylsuoireS this is the last one");