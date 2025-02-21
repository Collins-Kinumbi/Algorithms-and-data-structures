"use state";

const set = new Set([1, 2, 3]);

set.add(4);
set.add(4); // will be ignored
console.log(set.has(4));
console.log(set.size);

// set.clear(); //deletes all values in the set

for (let item of set) {
  console.log(item);
}
