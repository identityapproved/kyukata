// https://www.codewars.com/kata/577bd026df78c19bca0002c0
/* 
Character recognition software is widely used to digitise printed texts.Thus the texts can be edited, searched and stored on a computer.

When documents(especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text.You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake. 
*/

/* function correct(string) {
   let correctStr = ''
   for (let i = 0; i < string.length; i++) {
      const char = string[i];

      switch (char) {
         case '0':
            correctStr += 'O'
            break;

         case '1':
            correctStr += 'I'
            break;

         case '5':
            correctStr += 'S'
            break;

         default:
            correctStr += char
      }
   }
   return correctStr
} */

/* function correct(string) {
   string = string.replace(/0/g, 'O')
   string = string.replace(/5/g, 'S')
   string = string.replace(/1/g, 'I')

   return string
} */ /* === function correct(string) {
   return string.replace(/0/g, 'O').replace(/5/g, 'S').replace(/1/g, 'I')
} */

function correct(string) {
   return string.replace(/0|1|5/g,/* /[015]/g */(letter) => {
      switch (letter) {
         case '0':
            return 'O'

         case '1':
            return 'I'

         case '5':
            return 'S'
      }
   })
}

/* function correct(string) {
   const mistakes = { 0: 'O', 1: 'I', 5: 'S' }
   return string.replace(/0|1|5/g, (letter) => mistakes[letter])

} */


console.log(correct("L0ND0N"), "LONDON");
console.log(correct("DUBL1N"), "DUBLIN");
console.log(correct("51NGAP0RE"), "SINGAPORE");
console.log(correct("BUDAPE5T"), "BUDAPEST");
console.log(correct("PAR15"), "PARIS");