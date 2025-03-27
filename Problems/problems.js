"use strict";

// Given two strings, write a function to determine  if the second string is an anagram of the first.

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const lookup = {};

  for (let char of str1) {
    // if letter exists, increment, otherwise set to 1
    lookup[char] = (lookup[char] || 0) + 1;
  }

  // console.log(lookup);

  for (let char of str2) {
    if (!lookup[char]) return false; // If char doesn't exist or is 0

    lookup[char] -= 1;
  }
  return true;
}

console.log(isAnagram("aaz", "zaa"));
console.log(isAnagram("cinema", "iceman"));
///////////////////////////////////////////

// Write a function called 'same' it should take two arrays and check if the second array contains the squares of the values in the first array

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

// console.log(same([1, 2, 3], [4, 9, 1]));
// console.log(same([1, 2, 3, 5], [4, 9, 1]));

///////////////////////////////////////////

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

// console.log(charCount("Hello there!"));
