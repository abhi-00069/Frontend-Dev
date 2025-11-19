const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const validNumbers = [];
const invalidNumbers = [];
const conversions = [];

apiData.forEach((val, idx) => {
  const asString = String(val);
  const trimmed = asString.trim();
  const asBoolean = Boolean(val);
  const asNumber = Number(val);
  const entry = { index: idx, original: val, string: asString, boolean: asBoolean, number: asNumber };
  const isEmptyString = typeof val === "string" && trimmed === "";
  const isNaNNumber = Number.isNaN(asNumber);
  if (isEmptyString || isNaNNumber) {
    invalidNumbers.push({ index: idx, original: val });
  } else {
    validNumbers.push(asNumber);
  }
  conversions.push(entry);
});

console.log("Conversions:");
console.table(conversions);
console.log("Valid numeric array:", validNumbers);
console.log("Invalid numeric entries:", invalidNumbers);
console.log("Detailed Report:");
for (let i = 0; i < conversions.length; i++) {
  const c = conversions[i];
  const valid = !invalidNumbers.some(x => x.index === c.index);
  console.log(`Index ${c.index} | Original: ${c.original} | String: "${c.string}" | Boolean: ${c.boolean} | Number: ${c.number} | NumericValid: ${valid}`);
}
