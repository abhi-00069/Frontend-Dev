class NegativeAmountError extends Error {}
class MissingFieldError extends Error {}
class NullEntryError extends Error {}

const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null
];

const valid = [];
const invalid = [];

transactions.forEach((tx, idx) => {
  try {
    if (tx === null) throw new NullEntryError(`Null transaction at index ${idx}`);
    if (tx.id == null || tx.amount == null) throw new MissingFieldError(`Missing id or amount at index ${idx}`);
    if (typeof tx.amount !== "number") throw new TypeError(`Amount not a number at index ${idx}`);
    if (tx.amount < 0) throw new NegativeAmountError(`Negative amount for id ${tx.id}`);
    valid.push(tx);
  } catch (err) {
    invalid.push({ index: idx, error: err.name, message: err.message });
  }
});

console.log("Valid transactions:", valid);
console.log("Invalid transactions:", invalid);
console.log(`Successful: ${valid.length} | Failed: ${invalid.length}`);
debugger;
