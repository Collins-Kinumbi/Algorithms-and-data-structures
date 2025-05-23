"use strict";

class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.currentLength = 0;
    this.rear = 0;
    this.front = 0;
  }

  isFull() {
    return this.currentLength === this.capacity;
  }

  isEmpty() {
    return this.currentLength === 0;
  }

  enqueue(element) {
    if (!this.isFull()) {
      this.items[this.rear] = element;
      this.rear = (this.rear + 1) % this.capacity;
      this.currentLength += 1;
    }
  }

  dequeue() {
    if (this.isEmpty()) return null;

    const item = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.currentLength -= 1;

    if (this.isEmpty()) {
      this.front = 0;
      this.rear = 0;
    }
    return item;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.front];
    }
    return null;
  }

  print() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
    } else {
      let i = this.front;
      let str = "";

      for (let count = 0; count < this.currentLength; count++) {
        str += this.items[i] + " ";
        i = (i + 1) % this.capacity;
      }
      console.log(str.trim());
    }
  }
}

const queue = new CircularQueue(5);

console.log(queue.isEmpty());

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
console.log(queue);
console.log(queue.isFull());
queue.print();
console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue.isFull());
queue.enqueue(30);
queue.print();
