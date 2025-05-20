"use strict";

class HashTable {
  constructor(size = 53) {
    this.table = new Array(size);
    this.size = size;
  }

  // Private hash method
  #hash(key) {
    let total = 0;
    let PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let value = key.charCodeAt(i);

      total = total * PRIME + value;
    }
    return total % this.size;
  }

  set(key, value) {
    if (typeof key !== "string") return;

    let index = this.#hash(key); // get index using hash function
    const bucket = this.table[index]; // get what's currently at that index

    if (!bucket) {
      // if it's empty (undefined), initialize it with an array of the key-value pair
      this.table[index] = [[key, value]];
    } else {
      // if there's already a bucket (a list of key-value pairs)
      let sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        // key exists: update the value
        sameKeyItem[1] = value;
      } else {
        // key doesn't exist: push a new [key, value] into the bucket
        bucket.push([key, value]);
      }
    }
  }

  get(key) {
    if (typeof key !== "string") return;

    let index = this.#hash(key); // Hash the key to get the index
    let bucket = this.table[index]; // Get whatever is at that index

    if (bucket) {
      let sameKeyItem = bucket.find((item) => item[0] === key); // Search for matching key
      if (sameKeyItem) {
        return sameKeyItem[1]; // Return its value
      }
    }

    return undefined; // Not found
  }

  keys() {
    let keys = [];

    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        for (let j = 0; j < this.table[i].length; j++) {
          keys.push(this.table[i][j][0]);
        }
      }
    }
    return keys;
  }

  values() {
    let values = [];

    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        for (let j = 0; j < this.table[i].length; j++) {
          values.push(this.table[i][j][1]);
        }
      }
    }
    return values;
  }

  remove(key) {
    if (typeof key !== "string") return;

    let index = this.#hash(key);

    let bucket = this.table[index];

    if (bucket) {
      const itemIndex = bucket.findIndex((item) => item[0] === key); //Get index if item in bucket

      if (itemIndex !== -1) {
        const deletedItem = bucket[itemIndex][1]; // get the value to return

        bucket.splice(itemIndex, 1); // remove the item from the bucket
        return deletedItem;
      }
    }

    return "Item does not exist";
  }

  display() {
    // Create an empty object to store the final key-value pairs
    let result = {};

    // Loop through each slot in the main table array
    for (let i = 0; i < this.table.length; i++) {
      // Get the bucket (array of key-value pairs) at the current index
      let bucket = this.table[i];

      // If the bucket exists (i.e., there is data at this index)
      if (bucket) {
        // Loop through each key-value pair in the bucket
        for (let j = 0; j < bucket.length; j++) {
          const [key, value] = bucket[j]; // Destructure key and value from the pair
          result[key] = value; // Add the key-value pair to the result object
        }
      }
    }

    // Return the final object containing all stored key-value pairs
    return result;
  }
}

const table = new HashTable(101);

table.set("yellow", "#FFFF00");
table.set("name", "bruce");
table.set("mane", "wayne");
table.set("bane", "bayne");

// console.log(table.table[39]);

console.log(table.get("mane"));
console.log(table.keys());
console.log(table.values());
console.log(table);
