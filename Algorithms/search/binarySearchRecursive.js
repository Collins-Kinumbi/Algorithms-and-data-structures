"use strict";
/* Given a sorted array of 'n' elements and a target element 't', find the index pf 't* ine array. Return -1 if the target is not found*/

function recursiveBinarySearch(arr, target) {
  return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) {
    return -1;
  }

  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (target === arr[middleIndex]) return middleIndex;
  if (target < arr[middleIndex]) {
    return search(arr, target, leftIndex, middleIndex - 1);
  } else {
    return search(arr, target, middleIndex + 1, rightIndex);
  }
}

console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], -1)); //-1
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10)); //4

// Big - O = O(logn)
