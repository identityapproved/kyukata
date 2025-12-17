/* An isogram is a word that has no repeating letters, consecutive or non - consecutive.Implement a function that determines whether a string that contains only letters is an isogram.Assume the empty string is an isogram.Ignore letter case. */

/* function isIsogram(str) {
  const counts = {};

  for (let i = 0; i < str.length; i++) {
    const letters = str[i].toLowerCase();

    if (counts[letters] || letters === "") {
      return false;
    }
    counts[letters] = 1;
  }
  return true;
} */

/* function isIsogram(str) {
  const counts = {};

  return !str
    .toLowerCase()
    .split("")
    .some((letters) => {
      if (!counts[letters]) {
        counts[letters] = 1;
        console.log(counts);
        return false;
      } else {
        return true;
      }
    });
} */

function isIsogram(str) {
  return new Set(str.toLowerCase()).size === str.length;
}

console.log(isIsogram("Dermatoglyphics")); // true);
console.log(isIsogram("isogram")); // true);
console.log(isIsogram("aba")); // false, "same chars may not be adjacent");
console.log(isIsogram("moOse")); // false, "same chars may not be same case");
console.log(isIsogram("isIsogram")); // false);
console.log(isIsogram("")); // true, "an empty string is a valid isogram");
