/* Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).  */
/* 
function toCamelCase(str) {
  let camelCased = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char === "_" || char === "-") {
      camelCased += str[i + 1].toUpperCase();
      i += 1;
    } else {
      camelCased += str[i];
    }
  }
  return camelCased;
} */

/* function toCamelCase(str) {
  const words = str.split(/-|_/g);
  let camelCased = words[0];

  for (let i = 1; i < words.length; i++) {
    const word = words[i];
    camelCased += word[0].toUpperCase() + word.slice(1);
  }
  return camelCased;
} */

function toCamelCase(str) {
  return str.split(/-|_/g).reduce((camelCased, word, i) => {
    return i === 0 ? word : camelCased + word[0].toUpperCase() + word.slice(1);
  }, "");
}

// Clever solution
/* function toCamelCase(str) {
  return str.replace(/(_|-)./g, (m) => m.substr(1, 1).toUpperCase());
} */

console.log(toCamelCase("")); // '', "An empty string was provided but not returned")
console.log(toCamelCase("the_stealth_warrior")); // "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value")
console.log(toCamelCase("The-Stealth-Warrior")); // "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value")
console.log(toCamelCase("A-B-C")); // "ABC", "toCamelCase('A-B-C') did not return correct value")
