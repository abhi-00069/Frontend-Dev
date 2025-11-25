const menu = {
  pizza: 200,
  burger: 120,
  fries: 80,
  coke: 40
};

function calculateBill(orderItems) {
  const prices = orderItems.map(item => {
    if (!menu[item]) throw new Error("Invalid item: " + item);
    return menu[item];
  });
  return prices.reduce((a, b) => a + b, 0);
}

try {
  const total = calculateBill(["pizza", "coke", "fries"]);
  console.log("Total bill:", total);
} catch (e) {
  console.log("Error:", e.message);
}

try {
  calculateBill(["pizza", "icecream"]);
} catch (e) {
  console.log("Error:", e.message);
}
