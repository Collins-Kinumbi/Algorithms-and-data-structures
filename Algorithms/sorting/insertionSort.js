"use strict";

/*Given an array or integers, sort the array */

const nums = [-6, 20, 8, -2, 4];

function sort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = numberToInsert;
  }
} // Big - O = O(n^2)

sort(nums);
console.log(nums);
