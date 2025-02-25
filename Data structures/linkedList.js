"use strict";

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size += 1;
  }

  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let current = this.head;
      let values = "";
      while (current) {
        values += `${current.value} `;
        current = current.next;
      }
      console.log(values);
    }
  }
}

const list = new LinkedList();

console.log("List is empty? " + list.isEmpty());
console.log("List size: " + list.getSize());

list.print();

list.prepend(5);
list.prepend(10);
list.prepend(15);

// console.log(list);

list.print();
