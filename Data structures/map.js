"use strict";

const map = new Map([
  ["c", 3],
  ["d", 4],
]);

map.set("a", 1); // add a key value pair
map.set("b", 2);
map.delete("c");

console.log(map.has("a"));

console.log(map);

// map.clear() // deletes all the items in the map

for (let [key, value] of map) {
  console.log(`${key}:${value}`);
}
