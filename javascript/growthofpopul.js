// https://www.codewars.com/kata/563b662a59afc2b5120000c6

/* In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants? */

// !!!Math.floor()

/* function nbYear(p0, percent, aug, p) {
  let years = 0;

  while (p0 < p) {
    p0 += p0 * percent / 100 + aug;
    years++;
  }
  return years;
} */

/* function nbYear(p0, percent, aug, p, totalYears) {
  totalYears = totalYears || 0
  const getNextPopulation = (current) =>
    current + (current * percent / 100) + aug;

  if (p0 <= p) {
    p0 = getNextPopulation(p0)
    totalYears++
    return nbYear(p0, percent, aug, p, totalYears)
  }
  return totalYears;
} */

/* function nbYear(p0, percent, aug, p) {
  const getNextPopulation = (current) =>
    current + (current * percent / 100) + aug;

  if (p0 <= p) {
    p0 = getNextPopulation(p0)
    return 1 + nbYear(p0, percent, aug, p)
  }
  return 0;
} */

// clever solution
function nbYear(p0, percent, aug, p) {
  for (var y = 0; p0 < p; y++) {
    p0 = Math.floor(p0 * (1 + percent / 100) + aug);
  }
  return y;
}

function nbYear(p0, percent, aug, p) {
  if (p0 >= p) {
    return 0;
  } else {
    return 1 + nbYear(p0 * (1 + percent / 100) + aug, percent, aug, p)
  }
}

console.log(nbYear(1500, 5, 100, 5000), 15);
console.log(nbYear(1500000, 2.5, 10000, 2000000), 10);
console.log(nbYear(1500000, 0.25, 1000, 2000000), 94);
