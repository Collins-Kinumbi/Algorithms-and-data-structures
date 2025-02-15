"use strict";

/*Given an array or integers, sort the array */

const nums = [-6, 20, 8, -2, 4];

function sort(arr) {
  if (arr.length < 2) return arr;

  const mid = Math.floor(arr.length / 2);

  const leftArr = arr.slice(0, mid); // from 0 upto but not including mid
  const rightArr = arr.slice(mid);

  return merge(sort(leftArr), sort(rightArr));
}

function merge(leftArr, rightArr) {
  const sortedArr = [];

  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }

  return [...sortedArr, ...leftArr, ...rightArr];
}

console.log(sort(nums)); // [-6, -2, 4, 8, 20]

// Big - O = O(nlogn)
