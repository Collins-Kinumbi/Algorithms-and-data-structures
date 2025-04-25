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

    const index = this.#hash(key);

    const bucket = this.table[index];

    if (!bucket) {
      this.table[index] = [[key, value]];
    } else {
      let sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        sameKeyItem[1] = value; // Update existing key
      } else {
        bucket.push([key, value]); // Add new key-value pair
      }
    }
  }

  get(key) {
    if (typeof key !== "string") return;

    let index = this.#hash(key);

    const bucket = this.table[index];

    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      //   console.log(sameKeyItem);
      return sameKeyItem ? sameKeyItem[1] : undefined;
    }
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
