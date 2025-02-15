"use strict";

/*Given an array or integers, sort the array */

const nums = [-6, 20, 8, -2, 4];

function sort(arr) {
  if (arr.length < 2) return arr;
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...sort(left), pivot, ...sort(right)];
}

console.log(sort(nums));

// worst case  - O(n^2)
// average case - O(nlogn)
