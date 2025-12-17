// Sum Strings as Numbers

/* function sumStrings(a, b) {
  return (Number(a) + Number(b)).toString(); // for short nums
} */

/* function sumStrings(a, b) {
  let sum = "";
  // const longestNum = Math.max(a.length, b.length);
  if (a.length < b.length) {
    while (a.length != b.length) {
      a = "0" + a;
      console.log("~ a", a);
    }
  } else if (b.length < a.length) {
    while (a.length != b.length) {
      b = "0" + b;
      console.log("~ b", b);
    }
  }
  console.log(a, b);

  let carry = 0;

  for (let i = a.length - 1; i >= 0; i--) {
    const aNum = +a[i];
    const bNum = +b[i];

    const innerSum = aNum + bNum + carry;

    let placeNum = innerSum;
    console.log("~ placeNum out", placeNum);
    if (innerSum > 9) {
      placeNum = innerSum % 10;
      carry = Math.floor(innerSum / 10);
      console.log("~ placeNum in", placeNum);
      console.log("~ carry", carry);
    } else {
      carry = "";
    }
    sum = placeNum + sum;
    console.log("~ sum", sum);
  }
  sum = carry + sum;

  while (sum[0] === "0") {
    sum = sum.slice(1);
  }
  return sum;
} */

// best practice // clever
function sumStrings(a, b) {
  return (BigInt(a) + BigInt(b)).toString();
}

console.log(sumStrings("123", "456")); //  "579"
console.log(sumStrings("9999999", "1"));
console.log(
  sumStrings("712569312664357328695151392", "8100824045303269669937")
); // 712577413488402631964821329
