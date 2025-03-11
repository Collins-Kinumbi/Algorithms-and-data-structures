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
    this.tail = null;
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
    } else {
      this.tail = node; // step 3: if list is empty make new node equal to tail
    }

    this.head = node; // Step 4: Make new node equal to head

    this.size += 1; // Step 5: Increase size of the list by one
  }

  // O(1)
  append(value) {
    if (value === undefined || value === null) return; // Avoid adding undefined/null values
    const node = new Node(value); // Step 1: Create a new node

    if (this.isEmpty()) {
      this.head = node;
      this.tail = node; // Step 2: If list is empty, make new node the head also make new node the tail
    } else {
      this.tail.next = node; // Step 3: Make last node point be equal to new node
      this.tail = node; // Step 4: Make tail point to new node
    }

    this.size += 1; // Step 5 : Increase the size of the list
  }

  insert(value, index) {
    if (value === undefined || value === null) return; // Avoid adding undefined/null values

    if (index < 0 || index >= this.size) return;
    if (index === 0) {
      this.prepend(value);
    } else if (index === this.size - 1) {
      this.append(value);
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

    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    }

    let removedNode;
    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else if (index === this.size - 1) {
      let previous = this.head;
      for (let i = 0; i < index - 1; i++) {
        previous = previous.next;
      }
      removedNode = previous.next;
      previous.next = null;
      this.tail = previous;
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
        this.tail = previous;
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
    this.tail = this.head; // The current head will become the tail

    while (current) {
      let next = current.next; // Store next node
      current.next = previous; // Reverse pointer
      previous = current; // Move previous forward
      current = next; // Move current forward
    }
    this.head = previous; // Update head
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

list.prepend(8);
list.prepend(2);
list.prepend(4);
list.append(3);
list.append(1);
list.insert(5, 4);
console.log(list.removeFrom(5));
console.log(list.removeValue(1));
list.print();
list.reverse();
list.print();

console.log(list);
