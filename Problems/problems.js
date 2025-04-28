"use strict";

// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string. Return the merged string.

function mergeAlternately(word1, word2) {
  const len1 = word1.length; // Length of the first word
  const len2 = word2.length; // Length of the second word
  let a = 0,
    b = 0; // Pointers to track position in word1 and word2
  let result = []; // Array to collect characters

  // Continue until we reach the end of both strings
  while (a < len1 || b < len2) {
    if (a < len1) {
      result.push(word1[a]); // Add character from word1
      a++; // Move pointer forward
    }
    if (b < len2) {
      result.push(word2[b]); // Add character from word2
      b++; // Move pointer forward
    }
  }

  return result.join(""); // Join array into a single string and return
}

// console.log(mergeAlternately('ab', 'pqrs'))// "apbqrs"
// console.log(mergeAlternately('abc', 'pqr'))// "apbqcr"
// console.log(mergeAlternately('abcd', 'pq'))// "apbqcd"

///////////////////////////////////////////

// Given an integer array nums of size n, return the number with the value closest to 0 in nums. If there are multiple answers, return the number with the largest value.

function findClosestNumber(nums) {
  let closest = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (Math.abs(nums[i]) < Math.abs(closest)) {
      // if smaller than closest, closest = nums[i]
      closest = nums[i];
    } else if (Math.abs(nums[i]) === Math.abs(closest)) {
      // If tie, pick the larger number
      closest = Math.max(closest, nums[i]);
    }
  }
  return closest;
}

// console.log(findClosestNumber([-2, 2])); // 2
// console.log(findClosestNumber([-1, -1, -1])); // -1
// console.log(findClosestNumber([-3, 5, 9, -1])); // -1

///////////////////////////////////////////

// Write a function that checks if a string is a palindrome (reads the same forward and backward). Ignore case and non-alphanumeric characters.

function isPalindrome(str) {
  if (str.length === 0) return false;

  let string = str.toLowerCase().replace(/[^a-z0-9]/g, ""); // Remove non-alphanumeric characters

  let left = 0;
  let right = string.length - 1;

  while (left < right) {
    if (string[left] !== string[right]) return false;

    left += 1;
    right -= 1;
  }
  return true;
}

// console.log(isPalindrome("racecar"));
// console.log(isPalindrome("lol"));
// console.log(isPalindrome("A man, a plan, a canal: Panama"));
// console.log(isPalindrome("hello"));

///////////////////////////////////////////

//Write a function that takes a sorted array and a target sum. Return the first pair of numbers that sum to the target, or null if no such pair exists.

function pairSum(arr, target) {
  if (arr.length < 2 || target === undefined) return null;

  let left = 0;

  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === target) return [arr[left], arr[right]];

    if (sum > target) {
      right -= 1;
    } else {
      left += 1;
    }
  }
  return null;
}

// console.log(pairSum([1, 2, 3, 4, 5, 6], 7));

// console.log(pairSum([-5, -3, 0, 2, 4, 7], 4));

// console.log(pairSum([1, 2, 3, 4], 10));

///////////////////////////////////////////

// Implement a function called 'countUniqueValues', which accepts a sorted array and counts the unique values in the array. There can be negative numbers in the array, but will always be sorted

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;

  let left = 0;

  for (let right = 1; right < arr.length; right++) {
    if (arr[left] !== arr[right]) {
      left += 1;
      arr[left] = arr[right];
    }
  }
  return left + 1;
}

// console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
// console.log(countUniqueValues([1, 1, 2, 3]));

///////////////////////////////////////////

// Write a function 'sumZero' that takes in a sorted array of integers and should find the first pair where sum is 0. Return an array that includes both values that sum to zero or undefiled if the pair does not exist

function sumZero(arr) {
  if (!arr || arr.length < 2) return null;

  let left = 0;
  let right = arr.length - 1;

  while (right > left) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right -= 1; // Move right pointer left (since the array is sorted, we need a smaller number).
    } else {
      left += 1; // Move left pointer right (to increase the sum).
    }
  }
}

// console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));

///////////////////////////////////////////

// Write a function mostFrequentChar(str) that finds the character that appears the most in a given string

function mostFrequentChar(str) {
  if (!str) return null;

  const lookup = {};
  let frequent = str[0]; // Assign first character immediately
  for (let i = 0; i < str.length; i++) {
    lookup[str[i]] = (lookup[str[i]] || 0) + 1;
  }
  // console.log(lookup);

  for (let char in lookup) {
    if (lookup[char] > lookup[frequent]) {
      frequent = char;
    }
  }

  return frequent;
}

// console.log(mostFrequentChar("javascript"));

// console.log(mostFrequentChar("hello"));

// console.log(mostFrequentChar("aabbbcc"));
// console.log(mostFrequentChar("abc"));

///////////////////////////////////////////

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

// console.log(isAnagram("aaz", "zaa"));
// console.log(isAnagram("cinema", "iceman"));

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
