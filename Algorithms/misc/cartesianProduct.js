"use strict";
//  Given two finite non-empty sets, find the cartesian product

const A = [1, 2];
const B = [3, 4, 5];

function cartesianProduct(a, b) {
  const arr = [];
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      //   console.log(`A: ${a[i]} B: ${b[j]}`);
      arr.push([a[i], b[j]]);
    }
  }
  return arr;
}
// Big - O = O(mn) since the array length are not equal. if they were equal it would be O(n^2)

console.log(cartesianProduct(A, B));
