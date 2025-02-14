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

///////////////////////////////////////////////

// Without recursion
/*
function logNumberTo(num) {
  if (num <= 0) {
    console.log(0);
    return;
  }
  for (let i = 1; i <= num; i++) {
    console.log(i);
  }
}

logNumberTo(10);
*/

// With recusrion
function logNumberTo(num, i = 1) {
  if (i > num) return;
  console.log(i);
  logNumberTo(num, i + 1);
}

// logNumberTo(15);

/*
Sum of an Array
Write a recursive function that takes an array of numbers and returns the sum of all elements.
*/
const nums = [1, 2, 3, 4, 5];
//without recursion
/*
function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

console.log(sum(nums));
*/

//With recursion
function sum(arr, i = 0) {
  if (i >= arr.length) return 0;
  return arr[i] + sum(arr, i + 1);
}

console.log(sum(nums));
