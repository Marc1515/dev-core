const JSONParseCode = `
const jsonString = '{"name": "Alice", "age": 25}';
const user = JSON.parse(jsonString);

console.log(user.name);  // Outputs: Alice`;

const JSONStringifyCode = `
const user = { name: "Bob", age: 30 };
const jsonString = JSON.stringify(user);

console.log(jsonString);  // Outputs: '{"name":"Bob","age":30}'`;

const JSONNestedObjectsAndArraysCode = `
const jsonString = {
    "teamName": "Warriors",
    "members": [
      {"name": "John", "role": "Leader"},
      {"name": "Sarah", "role": "Member"}
    ]
  };
const team = JSON.parse(jsonString);

console.log(team.members[0].name);  // Outputs: John`;

const JSONErrorHandling = `
try {
    const user = JSON.parse('{"name": "Emily", age: "undefined"}');
} catch (error) {
    console.error("Error parsing JSON!", error);
}`;

export const codes = [
  JSONParseCode,
  JSONStringifyCode,
  JSONNestedObjectsAndArraysCode,
  JSONErrorHandling,
  "",
];
