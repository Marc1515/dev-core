const charactersAccessCode = `
let texto = "Hola";

console.log(texto[0]); // "H"`;

const concatenationCode = `
let saludo = "Hola";
let nombre = "Mundo";

console.log(saludo + " " + nombre); // "Hola Mundo"
console.log(saludo.concat(" ", nombre)); // "Hola Mundo"`;

const searchAndReplaceCode = `
let frase = "Bienvenido al mundo de JavaScript";

console.log(frase.indexOf("mundo")); // 15
console.log(frase.includes("JavaScript")); // true
console.log(frase.replace("JavaScript", "JS")); // "Bienvenido al mundo de JS"`;

const sliceAndExtractCode = `
let str = "Hello World";

console.log(str.slice(0, 5)); // "Hello"
console.log(str.slice(6)); // "World"`;

const transformCode = `
let greeting = "Hello World";

console.log(greeting.toUpperCase()); // "HELLO WORLD"
console.log(greeting.toLowerCase()); // "hello world"`;

export const codes = [
  charactersAccessCode,
  concatenationCode,
  searchAndReplaceCode,
  sliceAndExtractCode,
  transformCode,
];
