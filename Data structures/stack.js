"use strict";

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
