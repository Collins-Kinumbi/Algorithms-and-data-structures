"use strict";
function fibonacci(n) {
  let arr = [0, 1];

  for (let i = 2; i < n; i++) {
    // console.log(i);
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr;
}

console.log(fibonacci(1)); //[0,1]
console.log(fibonacci(2)); //[0,1]
console.log(fibonacci(3)); //[0,1,1]
console.log(fibonacci(4)); //[0,1,1,2]
console.log(fibonacci(8)); //[0,1,1,2,3,5,8,13]

// Big-O = O(n)
