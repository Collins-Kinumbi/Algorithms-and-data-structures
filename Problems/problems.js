"use strict";

/*Return the first none repeating char in a string */

function firstNoneRepeatingChar(str) {
  if (!str) return null;

  let lookup = {}; // will store characters in str as keys and the frequency of how many times they appear in str

  let first = str[0]; // Assign the very first char to first

  for (let i = 0; i < str.length; i++) {
    if (lookup[str[i]]) {
      lookup[str[i]] += 1;
    } else {
      lookup[str[i]] = 1;
    }
  }

  // console.log(lookup);
  for (let char of str) {
    if (lookup[char] === 1) {
      return char; // return the first none repeating
    }
  } // Guaranteed to be the first in original string order
  return null;
}

// console.log(firstNoneRepeatingChar("leetcode"));
// console.log(firstNoneRepeatingChar("lllllove"));
// console.log(firstNoneRepeatingChar("that is a hell of a name, Ian"))

///////////////////////////////////////////

/*
You are given a sorted unique integer array nums.

A range [a,b] is the set of all integers from a to b (inclusive).

Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.

Each range [a,b] in the list should be output as:

"a->b" if a != b
"a" if a == b
*/

function summaryRanges(nums) {
  let ranges = [];

  let i = 0;
  while (i < nums.length) {
    let start = nums[i];

    // Move `i` forward as long as numbers are consecutive
    while (i + 1 < nums.length && nums[i] + 1 === nums[i + 1]) {
      i += 1;
    }

    // If start === nums[i], it's a single number
    if (start === nums[i]) {
      ranges.push(start.toString());
    } else {
      ranges.push(`${start}->${nums[i]}`);
    }
    i++; // move to the next potential range
  }
  return ranges;
}

// console.log(summaryRanges([0, 1, 2, 4, 5, 7]));

///////////////////////////////////////////

/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
*/

function longestCommonPrefix(strs) {
  if (strs.length === 0) return "";
  let prefix = "";
  let minLength = strs[0].length;

  for (let i = 1; i < strs.length; i++) {
    if (strs[i].length < minLength) {
      minLength = strs[i].length;
    }
  }

  let i = 0;
  while (i < minLength) {
    const char = strs[0][i]; // pick character from first string

    // check this character against all other strings
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== char) {
        return prefix; // mismatch found → return what we have
      }
    }
    prefix += char; // everyone matched at this index
    i += 1;
  }

  return prefix;
}

// console.log(longestCommonPrefix(["flower", "flow", "flight"]));
// console.log(longestCommonPrefix(["dog", "racecar", "car"]));
// console.log(longestCommonPrefix([""]));

///////////////////////////////////////////

/*
Reverse words in string III in place
*/

function reverseWords(str) {
  //first let's split the string into an array
  const wordsArr = str.split(" ");
  // console.log(wordsArr);

  const output = []; // we'll push the revesed string items into this

  let i = 0;
  while (i < wordsArr.length) {
    output.push(reverse(wordsArr[i]));
    i++;
  } // in loop call helper fun that reverses the string and push the value into output

  // console.log(output.join(" "));
  return output.join(" "); // Join output into a string
}

function reverse(str) {
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }
  // console.log(reverseStr);

  return reverseStr;
}

// console.log(reverseWords("Let's take LeetCode contest")); //s'teL ekat edoCteeL tsetnoc

//////////////////////////////////////////

/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
*/

function maxProfit(prices) {
  let maxProfit = 0;
  let buy = 0,
    sell = 1;

  while (sell < prices.length) {
    if (prices[buy] > prices[sell]) {
      buy = sell; // found a new lower price
    } else {
      let profit = prices[sell] - prices[buy];
      // if (profit > maxProfit) {
      //   maxProfit = profit;
      // }
      maxProfit = Math.max(maxProfit, profit);
    }
    sell += 1;
  }

  return maxProfit;
}

// console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
// console.log(maxProfit([1, 2])); // 1

///////////////////////////////////////////

/*
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
*/

function isSubsequence(s, t) {
  if (s.length > t.length) return false;

  let i = 0;
  let j = 0;

  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      i += 1;
      j += 1;
    } else if (s[i] !== t[j]) {
      j += 1;
    }
  }
  return i === s.length; // we only care if we ever reach the end of i if we ever loop completly over s.
}

// console.log(isSubsequence("abc", "ahbgdc"));
// console.log(isSubsequence("axc", "ahbgdc"));

//////////////////////////////////////////

/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.
*/

function romanToInt(string) {
  const hash = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }; // basically put the 7 building blocks of Roman symbols in a hash map

  let sum = 0;

  for (let i = 0; i < string.length; i++) {
    let current = hash[string[i]];
    let next = hash[string[i + 1]];

    if (next > current) {
      sum += next - current;
      i += 1; // skip next since we already used it
      // Remember for loop increments i by 1 after code execution within the loop finishes in each iteration
    } else {
      sum += current; // Just add the current value
    }
  }
  return sum;
}

// console.log(romanToInt("MCMXCIV"));
// console.log(romanToInt("LVIII"));

///////////////////////////////////////////

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
