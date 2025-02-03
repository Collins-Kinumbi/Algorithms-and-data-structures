"use strict";

/*
function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }

  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }

  return true;
}

// Big - O = O(logn)

*/

function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }

  return (n & (n - 1)) === 0;
}

console.log(isPowerOfTwo(2)); //true
console.log(isPowerOfTwo(3)); //false
console.log(isPowerOfTwo(8)); //true
console.log(isPowerOfTwo(15)); //false

// Big - O = O(1)
