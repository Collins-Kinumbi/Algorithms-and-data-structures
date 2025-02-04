"use strict";
/*
🚀 Problem: Two Sum
Given an array of integers nums and an integer target, return the indices of the two numbers that add up to the target.

You may assume that each input has exactly one solution, and you may not use the same element twice.
*/

const nums = [2, 7, 11, 15];
let target = 9;

function twoSum(arr, target) {
  const output = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        output.push(i);
        output.push(j);
      }
    }
  }
  return output;
}

// Big - O = O(n^2)

console.log(twoSum(nums, target));

function twoSumHush(arr, target) {
  const hash = {};
  for (let i = 0; i < arr.length; i++) {
    const currentNum = arr[i];
    if (hash[target - currentNum] !== undefined) {
      return [hash[target - currentNum], i];
    }
    hash[currentNum] = i;
  }
  return [];
}

console.log(twoSum(nums, target));
