"use strict";

// Write a function that returns the number of a alpha numeric character in a string

function charCount(str) {
  const lowerCase = str.toLowerCase();
  const hash = {};
  for (let i = 0; i < lowerCase.length; i++) {
    let code = lowerCase.charCodeAt(i);

    if (
      (code > 47 && code < 58) || // numeric (0-9)
      (code > 96 && code < 123) // lower alpha(a-z)
    ) {
      if (hash[lowerCase[i]]) {
        hash[lowerCase[i]] += 1;
      } else {
        hash[lowerCase[i]] = 1;
      }
    }
  }
  return hash;
}

console.log(charCount("Hello there!"));
