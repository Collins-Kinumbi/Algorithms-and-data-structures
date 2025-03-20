class Node {
  constructor(value) {
    this.value = value;
    this.previous = null;
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

  prepend(value) {
    if (value === null || value === undefined) return;

    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.previous = node;
      node.next = this.head;
      this.head = node;
    }
    this.size += 1;
  }

  append(value) {
    if (value === null || value === undefined) return;

    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.previous = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.size += 1;
  }

  insertAt(value, index) {
    if (index < 0 || index >= this.size) {
      console.log("Invalid index");
      return;
    }

    if (index === 0) {
      this.prepend(value);
    } else {
      if (value === null || value === undefined) return;

      const node = new Node(value);
      let previous = this.head;
      for (let i = 0; i < index - 1; i++) {
        previous = previous.next;
      }

      previous.next.previous = node;
      node.next = previous.next;
      node.previous = previous;
      previous.next = node;

      this.size += 1;
    }
  }

  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      return "Invalid index";
    }

    let removedNode;
    if (this.size === 1) {
      removedNode = this.head;
      this.head = null;
      this.tail = null;
      this.size -= 1;
      return removedNode.value;
    }

    if (index === 0) {
      removedNode = this.head;
      this.head = removedNode.next;
      this.head.previous = null;
    } else if (index === this.size - 1) {
      removedNode = this.tail;
      this.tail = this.tail.previous;
      this.tail.next = null;
    } else {
      let previous = this.head;
      for (let i = 0; i < index - 1; i++) {
        previous = previous.next;
      }
      removedNode = previous.next;
      previous.next = removedNode.next;
      previous.next.previous = previous;
    }

    this.size -= 1;
    return removedNode.value;
  }

  removeValue(value) {
    if (value === null || value === undefined) return;

    if (this.head.value === value) {
      this.head = this.head.next;
      this.head.previous = null;
      this.size -= 1;
      return value;
    } else {
      let removedNode;
      let previous = this.head;
      while (previous.next && previous.next.value !== value) {
        previous = previous.next;
      }
      if (previous.next) {
        removedNode = previous.next;
        if (!removedNode.next) {
          this.tail = previous;
        }
        previous.next = removedNode.next;
        this.size -= 1;
        return removedNode.value;
      }
      return null;
    }
  }

  search(value) {
    if (value === null || value === undefined) return;

    if (this.isEmpty()) {
      return -1;
    }

    let i = 0;
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return i;
      }
      current = current.next;
      i += 1;
    }

    return -1;
  }

  reverse() {
    let previous = null;
    let current = this.head;
    this.tail = this.head;
    while (current) {
      let next = current.next;

      // Swap next and previous pointers
      current.next = previous;
      current.previous = next;

      // Move `previous` and `current` forward
      previous = current;
      current = next;
    }
    this.head = previous;
  }

  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
      return;
    }
    let str = "";
    let current = this.head;
    while (current) {
      str += current.value + " ";
      current = current.next;
    }
    console.log(str);
  }
}

const list = new LinkedList();

list.append(1);
list.append(2);

list.prepend(3);
list.prepend(4);
list.prepend(5);
list.insertAt(6, 0);
list.insertAt(7, 5);
list.insertAt(8, 2);
list.insertAt(9, 6);
list.insertAt(10, 8);

// list.removeFrom(6);
// list.removeFrom(2);
// list.removeValue(7);
// list.removeValue(5);

console.log(list.search(5));
console.log(list.search(10));
list.reverse();

list.print();

console.log(list);
