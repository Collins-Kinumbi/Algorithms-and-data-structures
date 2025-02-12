"use strict";
/*Given an array or integers, sort the array */

const nums = [-6, 20, 8, -2, 4];

function sort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
} // Big - O = O(n^2)

sort(nums);
console.log(nums); //[-6, -2, 4, 8, 20]

const string = ["d", "c", "b", "a"];
sort(string);
console.log(string);
