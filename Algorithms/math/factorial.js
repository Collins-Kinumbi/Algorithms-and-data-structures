"use strict";
function factorial(n) {
  let result = 1; // 1 instead of 0 because multiplying by 0 will always return 0
  for (let i = 1; i <= n; i++) {
    // console.log(result);
    result = result * i;
  }
  return result;
}

console.log(factorial(0)); //1
console.log(factorial(1)); //1
console.log(factorial(3)); //1
console.log(factorial(5)); //120
