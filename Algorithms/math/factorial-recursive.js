"use strict";

function factorialRecursive(n) {
  if (n <= 1) {
    return n;
  }
  return n * factorialRecursive(n - 1);
}

console.log(factorialRecursive(3)); //6

// Big - O = O(n)
