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

    return this; // <--- This enables chaining
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

  search(value, node = this.root) {
    if (!node) return false; //BASE CASE: If node is null, value is not found

    if (node.value === value) {
      return true; // Found the value
    } else if (value < node.value) {
      return this.search(value, node.left); // Search in the left subtree
    } else {
      return this.search(value, node.right); // Search in the right subtree
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

  /////////////////////////////////////////
  //Problems:

  /*
  Challenge 2: Medium
  Problem:
  Given a binary tree, return true if it contains a target value, or false if not.
  Implement:

  One solution with DFS (any of pre/in/post order is fine)(Find method up top)

  One solution with BFS
 */

  BFSFind(value) {
    if (this.isEmpty()) return false;

    const queue = [this.root];

    while (queue.length) {
      let current = queue.shift();

      if (current.value === value) return true;

      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
    return false;
  }

  /*
  Challenge 3: Medium-Hard
  Problem:
  Find the minimum depth of the binary tree.
  The minimum depth is the shortest path from root to any leaf node.

  Hint: BFS is very good for this because it finds the shortest path first!
  */

  minDepth() {
    if (this.isEmpty()) return 0;

    const queue = [[this.root, 1]];

    while (queue.length) {
      const [current, depth] = queue.shift();

      if (!current.left && !current.right) {
        return depth;
      }

      if (current.left) {
        queue.push([current.left, depth + 1]);
      }

      if (current.right) {
        queue.push([current.right, depth + 1]);
      }
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
