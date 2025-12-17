// https://www.codewars.com/kata/550498447451fbbd7600041c

/* Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order. */

/* Remarks

a or b might be [] or {} (all languages except R, Shell).

a or b might be nil or null or None or nothing (except in C++, COBOL, Crystal, D, Dart, Elixir, Fortran, F#, Haskell, Nim, OCaml, Pascal, Perl, PowerShell, Prolog, PureScript, R, Racket, Rust, Shell, Swift).

If a or b are nil (or null or None, depending on the language), the problem doesn't make sense so return false. */

/* function comp(a, b) {
  if (!a || !b) return false;
  
  const squaredValues = b.reduce((values, value) => {
    values[value] = values[value] || 0;
    values[value]++;
    return values;
  }, {});

  for (let i = 0; i < a.length; i++) {
    const value = a[i];
    const sqrd = value ** 2;
    if (!squaredValues[sqrd]) {
      return false;
    } else {
      squaredValues[sqrd]--;
    }  
  }

  return true;
} */

/* function comp(a, b) {
  if (!a || !b) return false;

  const squaredValues = b.reduce((values, value) => {
    values[value] = values[value] || 0;
    values[value]++;
    return values;
  }, {});

  return a.every(value => {
    const sqrd = value ** 2;
    if (!squaredValues[sqrd]) {
      return false;
    } else {
      squaredValues[sqrd]--;
      return true;
    }
  });
} */

function comp(a, b) {
  if (!a || !b) return false;

  const sortedValues = a.map(val => val ** 2).sort();
  const sortedAndSquaredValues = b.sort();

  return sortedValues.toString() === sortedAndSquaredValues.toString();
}

const a = [121, 144, 19, 161, 19, 144, 19, 11];
const b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];

const c = [121, 144, 19, 161, 19, 144, 19, 11];
const d = [121, 14641, 20736, 36100, 25921, 61, 20736, 361];

const e = [9, 6, 5, 0, 8, 1, 0, 0, 0, 2, 8, 2, 4, 3, 4];
const f = [4, 1, 9, 0, 0, 16, 0, 4, 64, 36, 64, 1, 81, 25, 16];

console.log(comp(a, b), true);
console.log(comp(c, d), false);
console.log(comp(e, f), false);
