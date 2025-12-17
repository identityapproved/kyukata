// KATA // Maximum subarray sum

// Kadane's algorithm

/* var maximumSubArray = function (array) {
  var ans = 0;
  var sum = 0;

  console.log(ans, sum);
  for (var i = 0; i < array.length; i++) {
    ans = Math.max(0, ans + array[i]);
    sum = Math.max(sum, ans);
    console.log("in for loop", ans, sum, array[i]);
  }
  console.log("over for loop", ans, sum);
  return sum;
};

maximumSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
 */

/* 
var maxSequence = function (arr) {
  let maxSum = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      let currentSum = 0;
      let subArray = [];
      for (let k = i; k < j; k++) {
        currentSum += arr[k];
        subArray.push(arr[k]);
      }
      console.log("subArray, currentSum", subArray, currentSum);
      if (currentSum > maxSum) {
        maxSum = currentSum;
      }
    }
  }
  return maxSum;
}; // not pass test cases

 */
const maxSequence = function (arr) {
  let currentSum = 0;
  let maxSum = 0;

  console.log(currentSum, maxSum);
  for (let i = 0; i < arr.length; i++) {
    const currentNumber = arr[i];
    currentSum = Math.max(currentSum + currentNumber, 0);
    maxSum = Math.max(currentSum, maxSum);
    console.log("in for loop", currentSum, maxSum, arr[i]);
  }
  console.log("over for loop", currentSum, maxSum);
  return maxSum;
};

console.log(maxSequence([])); // 0
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
