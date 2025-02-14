"use strict";
const nums1 = [1, 2, 3, 4, 5];
const nums2 = [1, [2], 3, [4, 5]];

// Without recursion
/*
function sumNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        // console.log(arr[i][j]);
        sum += arr[i][j];
      }
    } else {
      sum += arr[i];
    }
  }
  return sum;
}

console.log(sumNumbers(nums1));
console.log(sumNumbers(nums2));
*/

// using recursion
function sumNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    if (Array.isArray(arr[i])) {
      sum += sumNumbers(arr[i]);
    } else {
      sum += arr[i];
    }
  }
  return sum;
}

// console.log(sumNumbers(nums1));
// console.log(sumNumbers(nums2));
