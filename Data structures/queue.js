"use strict";

class Queue {
  constructor() {
    this.items = {};
    this.rear = 0;
    this.front = 0;
  }

  enqueue(element) {
    this.items[this.rear] = element;
    this.rear += 1;
  }

  dequeue() {
    if (this.isEmpty()) return "Queue is empty";
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front += 1;
    return item;
  }

  isEmpty() {
    return this.rear - this.front === 0;
  }

  peek() {
    return this.items[this.front];
  }

  size() {
    return this.rear - this.front;
  }

  print() {
    // console.log(this.items);
    console.log(Object.values(this.items).join(", "));
  }
}

const queue = new Queue();

console.log(queue.isEmpty());

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.size());
queue.print();
console.log(queue.peek());
