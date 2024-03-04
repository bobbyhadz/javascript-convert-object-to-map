// EXAMPLE 1 - Convert an Object to a Map in JavaScript

const obj = {
  id: 1,
  name: 'bobby',
};

const map1 = new Map(Object.entries(obj));
console.log(map1); // 👉️ {'id' => 1, 'name' => 'bobby'}

// ------------------------------------------------------------------

// // EXAMPLE 2 - Defining a reusable function

// function objectToMap(obj) {
//   return new Map(Object.entries(obj));
// }

// const obj = {
//   id: 1,
//   name: 'bobby',
// };

// const map1 = objectToMap(obj);

// // 👇️ Map(2) { 'id' => 1, 'name' => 'bobby' }
// console.log(map1);

// ------------------------------------------------------------------

// // EXAMPLE 3 - Convert an Object to a Map using `Array.map()`

// const obj = {
//   id: 1,
//   name: 'bobby',
// };

// const arr = Object.keys(obj).map(key => [key, obj[key]]);

// // 👇️ [ [ 'id', 1 ], [ 'name', 'bobby' ] ]
// console.log(arr);

// const map1 = new Map(arr);

// // Map(2) { 'id' => 1, 'name' => 'bobby' }
// console.log(map1);

// ------------------------------------------------------------------

// // EXAMPLE 4 - Convert an Object to a Map using a `for...of` loop

// const obj = {
//   id: 1,
//   name: 'bobby',
// };

// const map1 = new Map();

// for (const [key, value] of Object.entries(obj)) {
//   map1.set(key, value);
// }

// // 👇️ Map(2) { 'id' => 1, 'name' => 'bobby' }
// console.log(map1);
