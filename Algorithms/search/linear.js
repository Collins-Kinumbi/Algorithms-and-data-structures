"use strict";

/*Given an array of 'n' elements and a target 't', find the index of 't' in the array. Return -1 if the target element is not found */

function linearSearch(arr, target) {
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === target) {
      return index;
    }
  }
  return -1;
}

console.log(linearSearch([-5, 2, 10, 4, 6], 6)); //4
console.log(linearSearch([-5, 2, 10, 4, 6], 10)); //2
console.log(linearSearch([-5, 2, 10, 4, 6], 8)); //-1

// Big - O = O(n)
