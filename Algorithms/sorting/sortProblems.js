"use strict";

/*Basic sorting problems */

/*1. Sort an Array – Implement Quick Sort and Merge Sort to sort an array of numbers. */

const nums = [5, 3, 8, 4, 2];

// Bubble sort

function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}

// console.log(bubbleSort(nums));

// Insertion sort

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let numToInsert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > numToInsert) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = numToInsert;
  }
  return arr;
}

// console.log(insertionSort(nums));

// Quick sort

function quickSort(arr) {
  if (arr.length < 2) return arr;

  let pivot = arr[arr.length - 1];
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (pivot > arr[i]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

// console.log(quickSort(nums));

// Merge sort

function sort(arr) {
  if (arr.length < 2) return arr;

  let mid = Math.floor(arr.length / 2);

  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(sort(left), sort(right));
}

function merge(left, right) {
  let sortedArr = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }
  return [...sortedArr, ...left, ...right];
}

// console.log("Bubble Sort:", bubbleSort(nums));
// console.log("Insertion Sort:", insertionSort(nums));
// console.log("Quick Sort:", quickSort(nums));
// console.log("Merge Sort:", sort(nums));
///////////////////////////////////////////

/*2. Sort Strings by Length – Given an array of strings, sort them based on their length. */

const str = ["apple", "kiwi", "banana"];

const str2 = ["kiwi", "pear", "apple", "grape", "banana"];

function sortStr(arr) {
  if (arr.length < 2) return arr;

  let pivot = arr[arr.length - 1];

  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (pivot.length > arr[i].length) {
      left.push(arr[i]);
    } else if (pivot.length < arr[i].length) {
      right.push(arr[i]);
    } else {
      // If lengths are equal, sort alphabetically
      arr[i].localeCompare(pivot) < 0 ? left.push(arr[i]) : right.push(arr[i]);
    }
  }
  return [...sortStr(left), pivot, ...sortStr(right)];
}

console.log(sortStr(str));
console.log(sortStr(str2));
