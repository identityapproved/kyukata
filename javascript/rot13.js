// https://www.codewars.com/kata/530e15517bc88ac656000716

/* ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation". */

function rot13(message) {
  let encoded = '';

  for (let i = 0; i < message.length; i++) {
    const letter = message[i];
    const charCode = message.charCodeAt(i);

    if (charCode >= 65 && charCode <= 90) {
      let newCharCode = charCode + 13;

      if (newCharCode > 90) {
        newCharCode = 64 + (newCharCode - 90);
      }

      encoded += String.fromCharCode(newCharCode);
    } else if (charCode >= 97 && charCode <= 122) {
      let newCharCode = charCode + 13;

      if (newCharCode > 122) {
        newCharCode = 96 + (newCharCode - 122);
      }

      encoded += String.fromCharCode(newCharCode);
    } else {
      encoded += letter;
    }
  }
  return encoded;
}

console.log(rot13('test')); // Expected Output: grfg
console.log(rot13('Test')); // Expected Output: Grfg
