const vString = "hello";
const vNumber = 42;
const vBoolean = true;
const vArray = [1, 2, 3];
const vObject = { a: 1, b: 2 };
const vNull = null;
let vUndefined;
console.table([
  { label: "string", value: vString, type: typeof vString },
  { label: "number", value: vNumber, type: typeof vNumber },
  { label: "boolean", value: vBoolean, type: typeof vBoolean },
  { label: "array", value: vArray, type: Array.isArray(vArray) ? "array" : typeof vArray },
  { label: "object", value: vObject, type: typeof vObject },
  { label: "null", value: vNull, type: vNull === null ? "null" : typeof vNull },
  { label: "undefined", value: vUndefined, type: typeof vUndefined },
]);
