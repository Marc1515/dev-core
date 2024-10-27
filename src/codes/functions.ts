const declarationCode = `
function greet(name) {
  return \`Hello, \${name}!\`;
}
console.log(greet('Ana')); // "Hello, Ana!"`;

const expressionCode = `
const sayGoodbye = function(name) {
    return \`Goodbye, \${name}!\`;
};

console.log(sayGoodbye('Carlos')); // "Goodbye, Carlos!"`;

const arrowCode = `
const add = (a, b) => a + b;
    console.log(add(5, 3)); // 8
`;

const constructorCode = ` 
function Person(name) {
    this.name = name;
    this.greet = function() {
        return \`Hello, I'm \${this.name}\`;
    };
}

const ana = new Person('Ana');

console.log(ana.greet()); // "Hello, I'm Ana";`;

const generatorCode = `
function* generateId() {
    let id = 0;
    while(true) {
        yield id++;
    }
}

const gen = generateId();

console.log(gen.next().value); // 0

console.log(gen.next().value); // 1`;

const asyncCode = `
async function fetchData() {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
}`;

const closureCode = `
function createGreeting(greeting) {
    return function(name) {
        return \`\${greeting}, \${name}!\`;
    };
}

const sayHello = createGreeting('Hello');
const sayHi = createGreeting('Hi');

console.log(sayHello('Alice')); // "Hello, Alice!"
console.log(sayHi('Bob')); // "Hi, Bob!"`;

const callbackCode = ` 
function processUserInput(callback) {
    const name = prompt('Please enter your name.');
    callback(name);
}

processUserInput(function(name) {
    console.log('Hello, ' + name);
});`;

export const codes = [
  declarationCode,
  expressionCode,
  arrowCode,
  constructorCode,
  generatorCode,
  asyncCode,
  closureCode,
  callbackCode,
];
