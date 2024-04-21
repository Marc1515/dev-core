const forCode = `
for (initialization; condition; increment) {
  // code block to execute
}`;

const whileCode = `
while (condition) {
  // code block to execute
}`;

const doCode = `
do {
  // code block to execute
} while (condition);`;

const forInCode = `
for (var key in object) {
  console.log(key + ": " + object[key]);
}`;

const forOfCode = `
for (var element of iterable) {
  console.log(element);
}`;

export const codes = [forCode, whileCode, doCode, forInCode, forOfCode];
