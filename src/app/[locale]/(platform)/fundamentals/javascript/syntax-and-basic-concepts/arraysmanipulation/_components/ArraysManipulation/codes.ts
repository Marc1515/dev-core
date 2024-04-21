const addAndRemoveCode = `
let fruits = ["Apple", "Banana"];
fruits.push("Orange"); // ["Apple", "Banana", "Orange"]
fruits.pop(); // ["Apple", "Banana"]
fruits.shift(); // ["Banana"]
fruits.unshift("Strawberry"); // ["Strawberry", "Banana"]`;

const iterCode = `
let numbers = [1, 2, 3];
numbers.forEach(num => {
    console.log(num);
});`;

const searchInCode = `
let people = [{name: "John", age: 28}, {name: "Anna", age: 22}];
let anna = people.find(person => person.name === "Anna");
console.log(anna); // {name: "Anna", age: 22}`;

const sortCode = `
let numbers = [3, 1, 4, 1, 5, 9];
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 1, 3, 4, 5, 9]`;

const transformCode = `
let squares = numbers.map(num => num * num);
console.log(squares); // [1, 4, 9]`;

export const codes = [
  addAndRemoveCode,
  iterCode,
  searchInCode,
  sortCode,
  transformCode,
];
