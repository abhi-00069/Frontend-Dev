const totalPurchase = 10650;
let discount = 0;
if (totalPurchase >= 10000) discount = 25;
else if (totalPurchase >= 5000) discount = 15;
else if (totalPurchase >= 2000) discount = 5;
const final = Math.round(totalPurchase * (1 - discount / 100));
console.log("Original:", totalPurchase);
console.log("Discount %:", discount);
console.log("Final:", final);
