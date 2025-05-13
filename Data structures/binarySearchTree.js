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

  min(node = this.root) {
    if (!node) return null;
    if (node.left) {
      return this.findMin(node.left);
    }
    return node.value;
  }

  max(node = this.root) {
    if (!node) return null;
    if (node.right) {
      return this.findMax(node.right);
    }
    return node.value;
  }

  delete(value) {
    // This replaces the root of the BST with the result of the deleteNode process
    this.root = this.deleteNode(value, this.root);
  }

  deleteNode(value, node) {
    if (!node) return node; // Base case: node not found

    // Traverse the tree to find the node to delete
    if (value < node.value) {
      node.left = this.deleteNode(value, node.left); // Go left
    } else if (value > node.value) {
      node.right = this.deleteNode(value, node.right); // Go right
    } else {
      // Node found: there are 3 possible deletion cases

      // CASE 1: No children (leaf node)
      if (!node.left && !node.right) {
        return null; // Just delete it
      }

      // CASE 2: One child (right only)
      if (!node.left) {
        return node.right; // Replace node with right child
      }

      // CASE 2: One child (left only)
      else if (!node.right) {
        return node.left; // Replace node with left child
      }

      // CASE 3: Two children
      // Find the smallest value in the *right* subtree (in-order successor)
      node.value = this.min(node.right);

      // Delete the in-order successor from the right subtree
      node.right = this.deleteNode(node.value, node.right);
    }

    return node; // Always return the current node back up the call stack
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
