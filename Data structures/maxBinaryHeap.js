"use strict";

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  isEmpty() {
    return this.values.length === 0;
  }

  insert(value) {
    return this.bubbleUp(value);
  }
  bubbleUp(value) {
    this.values.push(value);
    let index = this.values.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);

    // While the current element is greater than its parent, swap them
    while (this.values[parentIndex] < this.values[index]) {
      let temp = this.values[index];
      this.values[index] = this.values[parentIndex];
      this.values[parentIndex] = temp;

      // Update index and parentIndex to continue bubbling up
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }

    return this.values;
  }
}

const heap = new MaxBinaryHeap();

console.log(heap.insert(10));
console.log(heap.insert(20));
console.log(heap.insert(30));
console.log(heap.insert(90));

console.log(heap);
