const a = Math.floor(Math.random() * 20) + 1;
const b = Math.floor(Math.random() * 20) + 1;
const ops = ["+", "-", "*", "/"];
const op = ops[Math.floor(Math.random() * ops.length)];
let ans;
switch (op) {
  case "+": ans = a + b; break;
  case "-": ans = a - b; break;
  case "*": ans = a * b; break;
  case "/": ans = (a / b).toFixed(2); break;
}
console.log(`${a} ${op} ${b} = ?`);
console.log("Answer:", ans);
