"use strict";

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set();
    }
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adjacencyList[vertex1].add(vertex2);
    this.adjacencyList[vertex2].add(vertex1);
  }

  display() {
    for (let vertex in this.adjacencyList) {
      console.log(vertex + "-> " + [...this.adjacencyList[vertex]].join(", "));
    }
  }

  hasEdge(vertex1, vertex2) {
    return (
      this.adjacencyList[vertex1].has(vertex2) &&
      this.adjacencyList[vertex2].has(vertex1)
    );
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].delete(vertex2);
    this.adjacencyList[vertex2].delete(vertex1);
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return;

    for (let adjacentVertex of this.adjacencyList[vertex]) {
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  // DFS Traversal
  DFS(vertex) {
    if (!vertex) return "Please pass in a vertex...";
    const result = [];
    const visited = {};

    this.DFSHelper(vertex, visited, result);

    return result;
  }
  DFSHelper(node, visited, result) {
    if (!node) return;

    visited[node] = true;
    result.push(node);

    for (let neighbor of this.adjacencyList[node]) {
      if (!visited[neighbor]) {
        this.DFSHelper(neighbor, visited, result);
      }
    }
  }

  // BFS Traversal
  BFS(vertex) {
    if (!vertex) return "Please pass in a vertex...";
    const queue = [vertex];
    const result = [];
    const visited = {};

    visited[vertex] = true;

    while (queue.length) {
      const node = queue.shift();
      result.push(node);

      for (let neighbor of this.adjacencyList[node]) {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      }
    }

    return result;
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.display();
console.log(graph.hasEdge("B", "A"));
console.log(graph.DFS("A"));
console.log(graph.BFS("A"));
console.log(graph);

/* 
// Adjacency matrix
const matrix = [
  [0, 1, 0],
  [1, 0, 1],
  [0, 1, 0],
];

console.log(matrix[0][1]);

// Adjacency list
const adjacencyList = {
  A: ["B"],
  B: ["A", "C"],
  C: ["B"],
};

console.log(adjacencyList["B"]);
 */
