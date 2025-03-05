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

  // O(1)
  prepend(value) {
    if (value === undefined || value === null) return; // Avoid adding undefined/null values
    const node = new Node(value); // Step 1: Create a new node

    if (!this.isEmpty()) {
      node.next = this.head; // Step 2: If list is not empty, make new node next point to head
    }

    this.head = node; // Step 3: Make new node equal to head

    this.size += 1; // Step 4: Increase size of the list by one
  }

  // O(n)
  append(value) {
    if (value === undefined || value === null) return; // Avoid adding undefined/null values
    const node = new Node(value); // Step 1: Create a new node

    if (this.isEmpty()) {
      this.head = node; // Step 2: If list is empty, make new node the head
      return;
    }
    let previous = this.head; // Step 3: Start from the head

    while (previous.next) {
      // Step 4: Traverse the list
      previous = previous.next;
    }
    previous.next = node; // Step 5: Attach new node at the end

    this.size += 1; // Step 6: Increase the size of the list
  }

  insert(value, index) {
    if (value === undefined || value === null) return; // Avoid adding undefined/null values

    if (index < 0 || index > this.size) return;
    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let previous = this.head;
      for (let i = 0; i < index - 1; i++) {
        previous = previous.next;
      }
      node.next = previous.next;
      previous.next = node;
      this.size += 1;
    }
  }

  removeFrom(index) {
    if (index < 0 || index >= this.size) return null;

    let removedNode;
    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let previous = this.head;
      for (let i = 0; i < index - 1; i++) {
        previous = previous.next;
      }
      removedNode = previous.next;
      previous.next = removedNode.next;
    }
    this.size -= 1;
    return removedNode.value;
  }

  removeValue(value) {
    if (value === undefined || value === null) return; // Avoid adding undefined/null values

    if (this.isEmpty()) return null;

    if (this.head.value === value) {
      this.head = this.head.next;
      this.size -= 1;
      return value;
    } else {
      let previous = this.head;
      while (previous.next && previous.next.value !== value) {
        previous = previous.next;
      }
      if (previous.next) {
        let removedNode = previous.next;
        previous.next = removedNode.next;
        this.size -= 1;
        return value;
      }
      return null;
    }
  }

  search(value) {
    if (this.isEmpty()) {
      return -1;
    }
    if (value === undefined || value === null) return; // Avoid adding undefined/null values

    let i = 0;
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return i;
      }
      current = current.next;
      i++;
    }
    return -1;
  }

  reverse() {
    let previous = null;
    let current = this.head;

    while (current) {
      let next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
    this.head = previous;
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

list.append(1);
list.append(2);
list.append(3);
list.append(4);

// console.log(list);

list.insert(20, 0);
list.insert(16, 1);

// console.log(list);
console.log(list.removeFrom(1));
console.log(list.removeFrom(7));

console.log(list.removeValue(2));
console.log(list.removeValue(3));
console.log(list.removeValue(1));

list.print();

console.log(list.search(5));
console.log(list.search(15));

list.reverse();
list.print();
