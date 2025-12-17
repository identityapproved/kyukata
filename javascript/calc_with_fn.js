/* This time we want to write calculations using functions and get the results. */

function zero(fn) {
   return !fn ? 0 : fn(0)
}
function one(fn) {
   return !fn ? 1 : fn(1)
}
function two(fn) {
   return !fn ? 2 : fn(2)
}
function three(fn) {
   return !fn ? 3 : fn(3)
}
function four(fn) {
   return !fn ? 4 : fn(4)
}
function five(fn) {
   return !fn ? 5 : fn(5)
}
function six(fn) {
   return !fn ? 6 : fn(6)
}
function seven(fn) {
   return !fn ? 7 : fn(7)
}
function eight(fn) {
   return !fn ? 8 : fn(8)
}
function nine(fn) {
   return !fn ? 9 : fn(9)
}

function plus(innerNum) {
   return function (outNum) {
      return Math.floor(outNum + innerNum)
   }
}

function minus(innerNum) {
   return function (outNum) {
      return Math.floor(outNum - innerNum)
   }
}

function times(innerNum) {
   return function (outNum) {
      return Math.floor(outNum * innerNum)
   }
}

function dividedBy(innerNum) {
   return function (outNum) {
      return Math.floor(outNum / innerNum)
   }
}

console.log(seven(times(five())))// 35);
console.log(four(plus(nine())))// 13);`
console.log(eight(minus(three())))// 5`);
console.log(six(dividedBy(two())))// 3);