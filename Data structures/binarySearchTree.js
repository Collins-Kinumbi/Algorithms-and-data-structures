"use strict";

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }

  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  search(root, value) {
    if (!root) return false; // If root is null, value is not found

    if (root.value === value) {
      return true; // Found the value
    } else if (value < root.value) {
      return this.search(root.left, value); // Search in the left subtree
    } else {
      return this.search(root.right, value); // Search in the right subtree
    }
  }

  // BFS Traversal
  preporder(root) {
    if (root) {
      console.log(root.value);
      this.preporder(root.left);
      this.preporder(root.right);
    }
  }

  inorder(root) {
    if (root) {
      this.inorder(root.left);
      console.log(root.value);
      this.inorder(root.right);
    }
  }

  postorder(root) {
    if (root) {
      this.postorder(root.left);
      this.postorder(root.right);
      console.log(root.value);
    }
  }
}

const bst = new BinarySearchTree();

console.log("Tree is empty:", bst.isEmpty());

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

console.log(bst.search(bst.root, 15));
console.log(bst.search(bst.root, 19));

// bst.preporder(bst.root);
// bst.inorder(bst.root);
bst.postorder(bst.root);

console.log(bst);
