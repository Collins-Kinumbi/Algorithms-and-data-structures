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
      //if empty root node = new node
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }

  insertNode(root, newNode) {
    if (root.value === newNode.value) return; // Stop if and don't insert duplicates

    if (newNode.value < root.value) {
      if (root.left === null) {
        // root left is empty, left = new node
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        // root right is empty, left = new node
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  search(value, root = this.root) {
    if (!root) return false; //BASE CASE: If root is null, value is not found

    if (root.value === value) {
      return true; // Found the value
    } else if (value < root.value) {
      return this.search(value, root.left); // Search in the left subtree
    } else {
      return this.search(value, root.right); // Search in the right subtree
    }
  }

  // DFS Traversal
  preOrder() {
    const visited = [];

    function traverse(node) {
      if (!node) return; // BASE CASE: If falsy stop
      visited.push(node.value); // Add to arr
      traverse(node.left); // Go left
      traverse(node.right); // Go right
    }
    traverse(this.root);
    return visited;
  }

  inOrder() {
    const visited = [];

    function traverse(node) {
      if (!node) return;
      traverse(node.left);
      visited.push(node.value);
      traverse(node.right);
    }
    traverse(this.root);

    return visited;
  }

  postOrder() {
    const visited = [];

    function traverse(node) {
      if (!node) return;
      traverse(node.left);
      traverse(node.right);
      visited.push(node.value);
    }
    traverse(this.root);
    return visited;
  }
  /////////////////////////////////////////

  // BFS Traversal
  levelOrder() {
    if (!this.root) return [];

    const queue = [];
    queue.push(this.root);

    const visited = [];
    while (queue.length) {
      let current = queue.shift();
      // console.log(current.value);
      visited.push(current.value);
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
    return visited;
  }
  /////////////////////////////////////////

  min(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }

  max(root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.max(root.right);
    }
  }

  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }
  deleteNode(root, value) {
    if (root === null) {
      return root;
    }
    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (!root.right && !root.right) {
        return null;
      }
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }
      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
    return root;
  }
}

const bst = new BinarySearchTree();

console.log("Tree is empty:", bst.isEmpty());

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

console.log(bst.search(15));
console.log(bst.search(19));

// bst.prepOrder(bst.root);
// bst.inOrder(bst.root);
// bst.postOrder(bst.root);
bst.levelOrder();
console.log("Larget value:", bst.max(bst.root));
console.log("Smallest value:", bst.min(bst.root));

bst.delete(3);
// bst.delete(15);
bst.delete(10);
bst.levelOrder();

console.log(bst);
