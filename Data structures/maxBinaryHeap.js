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

  // Method to remove and return the maximum value (root) from the Max Binary Heap
  extractMax() {
    // Step 1: Store the max value (root of the heap) to return later
    let max = this.values[0];

    // Step 2: Move the last element in the heap to the root position
    // This effectively removes the last element from the heap
    this.values[0] = this.values.pop();

    // Step 3: Initialize indices for tracking parent and children
    let parentIndex = 0;
    let leftIndex = 2 * parentIndex + 1;
    let rightIndex = 2 * parentIndex + 2;

    // Step 4: Bubble down the new root to its correct position
    // Continue while:
    // - Left child exists and is greater than parent
    // - OR right child exists and is greater than parent
    while (
      (this.values[leftIndex] !== undefined &&
        this.values[parentIndex] < this.values[leftIndex]) ||
      (this.values[rightIndex] !== undefined &&
        this.values[parentIndex] < this.values[rightIndex])
    ) {
      // Step 4a: Check which child is bigger (prefer the bigger child for swap)
      if (
        this.values[rightIndex] === undefined || // If right child doesn't exist
        this.values[leftIndex] > this.values[rightIndex]
      ) {
        // Step 4b: Swap parent with left child
        this.swap(parentIndex, leftIndex);
        // Update parent index to left child index (since they swapped)
        parentIndex = leftIndex;
      } else {
        // Step 4c: Swap parent with right child
        this.swap(parentIndex, rightIndex);
        // Update parent index to right child index (since they swapped)
        parentIndex = rightIndex;
      }

      // Step 5: Recalculate children indices for the new parent position
      leftIndex = 2 * parentIndex + 1;
      rightIndex = 2 * parentIndex + 2;
    }

    // Step 6: Log the updated heap (optional for debugging)
    console.log(this.values);

    // Step 7: Return the original max value
    return max;
  }

  // Helper method to swap two elements in the heap array
  swap(i, j) {
    let temp = this.values[i];
    this.values[i] = this.values[j];
    this.values[j] = temp;
  }
}

const heap = new MaxBinaryHeap();

console.log(heap.insert(10));
console.log(heap.insert(20));
console.log(heap.insert(30));
console.log(heap.insert(90));
console.log(heap.extractMax());

console.log(heap);
