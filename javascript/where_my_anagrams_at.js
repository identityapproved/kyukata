/* What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

'abba' & 'baab' == true

'abba' & 'bbaa' == true

'abba' & 'abbba' == false

'abba' & 'abca' == false

Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:
*/

const sorting = (word) => [...word].sort().join("");

/* function anagrams(word, words) {
  const sortedWord = sorting(word);
  const anagrams = [];
  for (let i = 0; i < words.length; i++) {
    const currentWord = words[i];
    const sortedAnagram = sorting(currentWord);
    if (sortedAnagram === sortedWord) {
      anagrams.push(currentWord);
    }
  }
  return anagrams;
} */

const countLetters = (word) =>
  Array.prototype.reduce.call(
    word,
    (counts, letter) => {
      counts[letter] = counts[letter] || 0;
      counts[letter]++;
      return counts;
    },
    {}
  );

const looseEqual = (obj1, obj2) => {
  const obj1Length = Object.keys(obj1).length;
  const obj2Length = Object.keys(obj2).length;
  if (obj1Length === obj2Length) {
    return Object.keys(obj1).every((key) => {
      return obj1[key] === obj2[key];
    });
  }
};

/* function anagrams(word, words) {
  const letterCount = countLetters(word);
  const anagrams = [];
  for (let i = 0; i < words.length; i++) {
    const currentWord = words[i];
    const anagramCount = countLetters(currentWord);
    if (looseEqual(letterCount, anagramCount)) {
      anagrams.push(currentWord);
    }
  }
  return anagrams;
} */

/* function anagrams(word, words) {
  const letterCount = countLetters(word);
  return words.filter((word) => looseEqual(letterCount, countLetters(word)));
} */

function anagrams(word, words) {
  const sortedWord = sorting(word);
  return words.filter((word) => sortedWord === sorting(word));
}

console.log(anagrams("abba", ["aabb", "abcd", "bbaa", "dada"]), [
  "aabb",
  "bbaa",
]);

console.log(anagrams("racer", ["crazer", "carer", "racar", "caers", "racer"]), [
  "carer",
  "racer",
]);

console.log(anagrams("laser", ["lazing", "lazy", "lacer"]), []);
