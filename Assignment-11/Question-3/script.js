const expenses = [8500, 2200, 15000, 3200, 1800];
const total = expenses.reduce((a, b) => a + b, 0);
const average = total / expenses.length;
let finalAmount = total;
finalAmount += finalAmount * 0.1;
console.log("Total:", total.toFixed(2));
console.log("Average:", average.toFixed(2));
console.log("Final after tax:", finalAmount.toFixed(2));
