class InvalidOperationError extends Error {}
class MathDomainError extends Error {}

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25, num2 = 0;

function calc(op, a, b) {
  switch (op) {
    case "add": return a + b;
    case "subtract": return a - b;
    case "divide":
      if (b === 0) throw new MathDomainError("Division by zero");
      return a / b;
    case "power": return Math.pow(a, b);
    case "root":
      if (a < 0) throw new MathDomainError("Root of negative number");
      return Math.pow(a, 1 / b);
    default: throw new InvalidOperationError(`Invalid operation: ${op}`);
  }
}

operations.forEach(op => {
  try {
    const result = calc(op, num1, num2);
    console.log(`Operation: ${op} | Result: ${result}`);
  } catch (err) {
    console.log(`Operation: ${op} | Error: ${err.name} - ${err.message}`);
  }
});
