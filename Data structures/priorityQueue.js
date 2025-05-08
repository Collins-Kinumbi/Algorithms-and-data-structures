"use strict";

// Node class to store value and priority
class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = []; // Underlying data structure (array to represent the heap)
  }

  // Check if the queue is empty
  isEmpty() {
    return this.values.length === 0;
  }

  // Public method to add an element to the queue
  enqueue(value, priority) {
    // Basic validation: ignore undefined/null values or invalid priorities
    if (value === undefined || value === null || isNaN(priority)) return;

    // Create a new node with value and priority
    const node = new Node(value, priority);

    // Insert node into the heap
    return this.insertNode(node);
  }

  // Internal method to maintain heap structure after insertion
  insertNode(node) {
    this.values.push(node); // Add node to the end of the heap

    let index = this.values.length - 1; // Start at the last index (new node)
    let parentIndex = Math.floor((index - 1) / 2); // Calculate parent index

    // "Bubble up" the node to maintain the heap property
    while (
      this.values[parentIndex] !== undefined && // Make sure parent exists
      this.values[index].priority < this.values[parentIndex].priority // If child's priority is less than parent's priority
    ) {
      // Swap child and parent
      let temp = this.values[index];
      this.values[index] = this.values[parentIndex];
      this.values[parentIndex] = temp;

      // Update indices to continue bubbling up
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }

    return this.values; // Return the updated heap
  }

  // Remove and return the node with the highest priority (lowest priority number)
  extractMin() {
    if (this.isEmpty()) return null;

    const min = this.values[0];

    // Move the last element to the root and remove the original root
    const end = this.values.pop();
    if (!this.isEmpty()) {
      this.values[0] = end;
      this.bubbleDown();
    }

    return min;
  }

  // Internal method to bubble down the root to maintain heap structure
  bubbleDown() {
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      let leftIndex = 2 * index + 1;
      let rightIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swapIndex = null;

      if (leftIndex < length) {
        leftChild = this.values[leftIndex];
        if (leftChild.priority < element.priority) {
          swapIndex = leftIndex;
        }
      }

      if (rightIndex < length) {
        rightChild = this.values[rightIndex];
        if (
          (swapIndex === null && rightChild.priority < element.priority) ||
          (swapIndex !== null && rightChild.priority < leftChild.priority)
        ) {
          swapIndex = rightIndex;
        }
      }

      if (swapIndex === null) break;

      this.swap(index, swapIndex);
      index = swapIndex;
    }
  }
}

// Test the PriorityQueue
const queue = new PriorityQueue();

console.log(queue.enqueue("Watch TV", 3)); // Lower priority
console.log(queue.enqueue("Pray", 1)); // Higher priority

console.log(queue.extractMin());

console.log(queue);
