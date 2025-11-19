const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}'
];

const clean = [];
const errors = [];

for (let i = 0; i < rawData.length; i++) {
  const line = rawData[i];
  try {
    const parsed = JSON.parse(line);
    if (!parsed.user || parsed.age == null) throw new Error("Missing keys");
    parsed.age = Number(parsed.age);
    if (Number.isNaN(parsed.age)) throw new Error("Invalid age");
    clean.push(parsed);
  } catch (err) {
    errors.push({ line: i, raw: line, message: err.message });
  }
}

console.log("Clean entries:", clean);
console.log("Errors with line numbers:", errors);
const adults = clean.filter(u => u.age >= 18);
const under18 = clean.filter(u => u.age < 18);
console.log("Adults:", adults);
console.log("Under 18 filtered out:", under18);
