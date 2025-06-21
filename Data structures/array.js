"use strict";

const arr = [1, 2, 3, true, "wayne"];

arr.push(300); // add item to the end
arr.unshift(200); // add item to the begining
arr.pop(); //remove item at the end
arr.shift(); // remove item from the begining

// Looping an array
for (let item of arr) {
  // console.log(item);
}

let i = 0;
while (i < arr.length) {
  // console.log(arr[i]);
  i++;
}

// map, filter, reduce, concat, slice and splice
const copyArr = arr.map((item) => item);
// console.log(copyArr);

const numbers = arr.filter((item) => {
  if (typeof item === "number") {
    return item;
  }
});
// console.log(numbers);

const sum = numbers.reduce((prev, item) => {
  return prev + item;
}, 0);

const product = numbers.reduce((prev, item) => {
  return prev * item;
}, 1);

const strs = ["Hello", "there", "lad", "?"];
const sentence = strs
  .reduce((prev, item) => {
    return prev + " " + item;
  }, "")
  .trim();

const keyValue = ["name", "Samuel", "age", 23];

const obj = keyValue.reduce((prev, item, index) => {
  if (index % 2 === 0) {
    prev[item] = keyValue[index + 1];
  }
  return prev;
}, {});

// console.log("sum: " + sum);
// console.log("product: " + product);
// console.log("sentence: " + sentence);
// console.log("obj: " + obj);

const res = numbers.some((item) => {
  return item < 3;
});
const res2 = numbers.every((item) => {
  return item < 3;
});

// console.log("are some elements less than 3: " + res);
// console.log("are all elements less than 3: " + res2);

const find = numbers.find((number) => number > 1);

// console.log(find);
