"use strict";

import LinkedList from "./linkedListWithTail.js";

// console.log(LinkedList);

class Stack {
  constructor() {
    this.list = new LinkedList();
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  getSize() {
    return "Length: " + this.list.getSize();
  }

  push(value) {
    this.list.prepend(value);
  }

  pop() {
    return this.list.removeFrom(0);
  }

  peek() {
    return this.isEmpty() ? "Stack is empty" : this.list.head.value;
  }

  print() {
    this.list.print();
  }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.getSize());

stack.print();

// Using Linked List
/*
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
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

  push(value) {
    if (value === null || value === undefined) return;

    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.size += 1;
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    let removedNode;
    if (this.size === 1) {
      removedNode = this.head;
      this.head = null;
      this.tail = null;
      this.size -= 1;
      return removedNode.value;
    }

    if (!this.isEmpty()) {
      removedNode = this.head;
      this.head = removedNode.next;
    }
    this.size -= 1;
    return removedNode.value;
  }
  print() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
    } else {
      let current = this.head;
      let values = "";
      while (current) {
        values += `${current.value} `;
        current = current.next;
      }
      console.log(values);
    }
    // if (this.isEmpty()) {
    //   console.log("Stack is empty");
    // } else {
    //   let str = "";
    //   let node = this.head;
    //   for (let i = 0; i < this.size; i++) {
    //     str += node.value + " ";
    //     node = node.next;
    //   }
    //   console.log(str);
    // }
  }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.print();
console.log(stack.pop());
console.log(stack.pop());
// console.log(stack.pop());

console.log(stack);
*/

// Using an array
/*
class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }
  push(element) {
    this.items[this.count] = element;
    console.log(`${element} added to ${this.count}`);
    this.count += 1;
    return this.count - 1;
  }
  pop() {
    if (this.count === 0) return undefined;
    let deleteItem = this.items[this.count - 1];
    console.log(`${deleteItem} removed`);
    this.count -= 1;
    return deleteItem;
  }
  peek() {
    console.log(`Top element is ${this.items[this.count - 1]}`);
    return this.items[this.count - 1];
  }
  isEmpty() {
    console.log(this.count === 0 ? "Stack is empty" : "Stack is not empty");
    return this.count === 0;
  }
  size() {
    console.log(`${this.count} elements in stack`);
    return this.count;
  }
  print() {
    let str = "";
    for (let i = 0; i < this.count; i++) {
      if (i < this.count - 1) {
        str += `${this.items[i]}, `;
      } else {
        str += `${this.items[i]}`;
      }
    }
    return str;
  }
  clear() {
    this.items = [];
    this.count = 0;
    return this.items;
  }
}

const stack = new Stack();

console.log(stack.push("hello"));
console.log(stack.push("mello"));
console.log(stack.push("yello"));
console.log(stack);
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.size());
console.log(stack.print());
*/
