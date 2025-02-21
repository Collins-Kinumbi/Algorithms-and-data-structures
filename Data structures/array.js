"use strict";

const arr = [1, 2, 3, true, "wayne"];

arr.push(300); // add item to the end
arr.unshift(200); // add item to the begining
arr.pop(); //remove item at the end
arr.shift(); // remove item from the begining

for (let item of arr) {
  console.log(item);
}

// map, filter, reduce, concat, slice and splice
