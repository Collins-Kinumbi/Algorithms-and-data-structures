"use strict";

const obj = {
  name: "Mark",
  age: 19,
  "power-scale": "S-tier",
  sayName: function () {
    console.log(this.name);
  },
};

obj.hobby = "Rock climbing";
obj["last name"] = "Grayson";

console.log(obj);
console.log(obj.name);
console.log(obj["age"]);
console.log(obj["power-scale"]);

delete obj["last name"];

console.log(obj);
obj.sayName();

// Object.keys() - returns an array of all the keys in an object
console.log(Object.keys(obj));

// Object.values - returns an array of all the values in an object
console.log(Object.values(obj));

// Object.entries() - returns an array of all the key value pairs present in the object
console.log(Object.entries(obj));
