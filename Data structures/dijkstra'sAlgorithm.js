"use strict";

// Node class to store value and priority
class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Map();
    }
  }

  addEdge(vertex1, vertex2, weight) {
    if (!weight) {
      console.log("please add weight value...");
      return;
    }
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
    }

    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2);
    }

    this.adjacencyList[vertex1].set(vertex2, weight);
    this.adjacencyList[vertex2].set(vertex1, weight);
  }

  display() {
    for (let vertex in this.adjacencyList) {
      const connections = [...this.adjacencyList[vertex]]
        .map(([neighbour, weight]) => `${neighbour} (${weight})`)
        .join(", ");
      console.log(`${vertex} -> ${connections}`);
    }
  }

  Dijkstra(start, finish) {
    const nodes = new PriorityQueue(); //Visted vertexes

    const distances = {};

    const previous = {};

    //Build up initial state
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }

      previous[vertex] = null;
    }

    // console.log(distances);
    // console.log(nodes);
    // console.log(previous);

    //As long as there is something to visit
    let smallest;
    const path = [];
    while (nodes.values.length) {
      smallest = nodes.dequeue().val;
      console.log(smallest);

      if (smallest === finish) {
        // WE'RE DONE
        // Build up path to return at the end
        // console.log(distances);
        // console.log(previous);
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        path.push(start);
        return path.reverse();
      }

      if (smallest || distances[smallest] !== Infinity) {
        for (let [neighbour, weight] of this.adjacencyList[smallest]) {
          // console.log(neighbour, weight);

          //Calculate new distance to neighbouring node
          let candidate = distances[smallest] + weight;
          if (candidate < distances[neighbour]) {
            //Updating new smallest distance neighbour
            distances[neighbour] = candidate;

            //Updating previous - how we got to neighbour
            previous[neighbour] = smallest;

            //Enqueue in priority queue with new priority
            nodes.enqueue(neighbour, candidate);
          }
        }
      }
    }

    return []; // No path found
  }
}

const graph = new Graph();

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "F", 1);
graph.addEdge("D", "E", 3);
graph.addEdge("F", "E", 1);

// console.log(graph.adjacencyList.Nairobi.get("Tokyo"));
graph.display();
console.log(graph);

console.log(graph.Dijkstra("A", "E"));
