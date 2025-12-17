/* Your job is to create a calculator which evaluates expressions in Reverse Polish notation.

For example expression 5 1 2 + 4 * + 3 - (which is equivalent to 5 + ((1 + 2) * 4) - 3 in normal notation) should evaluate to 14.

For your convenience, the input is formatted such that a space is provided between every token.

Empty expression should evaluate to 0.

Valid operations are +, -, *, /.

You may assume that there won't be exceptional situations (like stack underflow or division by zero). */

function calc(expr) {
   const operations = {
      "+": (a, b) => a + b,
      "-": (a, b) => a - b,
      "*": (a, b) => a * b,
      "/": (a, b) => a / b,
   }
   const exp = expr.split(' ')

   let stack = []
   for (let i = 0; i < exp.length; i++) {
      const el = exp[i];

      if (operations[el]) {
         const rightOne = stack.pop()
         const leftOne = stack.pop()
         const result = operations[el](+leftOne, +rightOne)
         stack.push(result)
      } else {
         stack.push(el)
      }
   }
   return +stack;
}

/* function calc(expr) {
   const operations = {
      "+": (a, b) => b + a,
      "-": (a, b) => b - a,
      "*": (a, b) => b * a,
      "/": (a, b) => b / a,
   }

   return +expr.split(' ').reduce((stack, current) => {
      stack.push(operations[current] ? operations[current](+stack.pop(), +stack.pop()) : current)
      return stack;
   }, []).pop()
} */

console.log(calc(""))// 0) // "Should work with empty string");
console.log(calc("3"))// 3) // "Should parse numbers");
console.log(calc("3.5"))// 3.5) // "Should parse float numbers");
console.log(calc("1 3 +"))// 4) // "Should support addition");
console.log(calc("1 3 *"))// 3) // "Should support multiplication");
console.log(calc("1 3 -"))// -2) // "Should support subtraction");
console.log(calc("4 2 /"))// 2) // "Should support division");
console.log(calc("5 1 2 + 4 * + 3 -"))// 14) // "Should support division");
