"use strict";
import LinkedList from "./linkedListWithTail.js";

class Queue {
  constructor() {
    this.list = new LinkedList();
  }
  isEmpty() {
    return this.list.isEmpty();
  }

  getSize() {
    return this.list.getSize();
  }

  peek() {
    return this.isEmpty() ? null : this.list.head.value;
  }

  enqueue(value) {
    this.list.append(value);
  }

  dequeue() {
    return this.list.removeFrom(0);
  }

  print() {
    this.list.print();
  }
}

const queue = new Queue();
``;

console.log(queue.isEmpty());
queue.enqueue(0);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue());
console.log(queue.peek());

// console.log(queue);
queue.print();

///////////////////////////////////////////
// Using custom linked list
/*
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  enqueue(value) {
    if (value === null || value === undefined) return;

    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size += 1;
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }

    let removedNode = this.head;
    this.head = removedNode.next;
    this.size -= 1;

    if (this.size === 0) {
      this.tail = null;
    }

    return removedNode.value;
  }

  peek() {
    return this.isEmpty() ? "Queue is empty" : this.head.value;
  }

  print() {
    let str = "";
    let current = this.head;
    while (current) {
      str += current.value + " ";
      current = current.next;
    }
    console.log(str);
  }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue());
console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());

queue.print();
// console.log(queue.peek());

console.log(queue);
*/

///////////////////////////////////////////
// Using an object
/*
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
*/
