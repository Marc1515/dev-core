const ifCode = `
if (condition) {
  // code block executed if the condition is true
}`;

const ifElseCode = `
if (condition) {
  // code block executed if the condition is true
} else {
  // code block executed if the condition is false
}`;

const ifElseIfElseCode = `
if (condition1) {
  // block executed if condition1 is true
} else if (condition2) {
  // block executed if condition2 is true
} else {
  // block executed if none of the above conditions are true
}`;

const switchCode = `
switch (expression) {
  case value1:
    // code block
    break;
  case value2:
    // code block
    break;
  default:
    // code block if none of the above
}`;

const forCode = `
for (initialization; condition; increment) {
  // code block to execute
}`;

const whileCode = `
while (condition) {
  // code block to execute
}`;

const doWhileCode = `
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

export const ConditionalCodes = [
  ifCode,
  ifElseCode,
  ifElseIfElseCode,
  switchCode,
];

export const RepetitionCodes = [
  forCode,
  forInCode,
  forOfCode,
  whileCode,
  doWhileCode,
];
