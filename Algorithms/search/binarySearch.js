"use strict";
/* Given a sorted array of 'n' elements and a target element 't', find the index pf 't* ine array. Return -1 if the target is not found*/

function binarySearch(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor(leftIndex + (rightIndex - leftIndex) / 2);

    // check if target is preset at the middle
    if (arr[middleIndex] === target) {
      return middleIndex;
    }

    // if target is greater, ignore left half
    if (arr[middleIndex] > target) {
      rightIndex = middleIndex - 1;
    }
    // If x is smaller, ignore right half
    else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
}

console.log(binarySearch([-5, 2, 4, 6, 10], -5)); //0
console.log(binarySearch([-5, 2, 4, 6, 10], -1)); //-1
console.log(binarySearch([-5, 2, 4, 6, 10], 10)); //4
