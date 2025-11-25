const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 50000, stock: 3 },
  { id: 2, name: "Mouse", category: "Electronics", price: 800, stock: 15 },
  { id: 3, name: "Shirt", category: "Clothing", price: 1500, stock: 2 },
  { id: 4, name: "Shoes", category: "Clothing", price: 2500, stock: 6 }
];

function getLowStockProducts() {
  return products.filter(p => p.stock < 5);
}

function sortProductsByPrice() {
  return [...products].sort((a, b) => a.price - b.price);
}

function calculateTotalInventoryValue() {
  return products.reduce((sum, p) => sum + p.price * p.stock, 0);
}

function groupByCategory() {
  return products.reduce((acc, p) => {
    if (!acc[p.category]) acc[p.category] = [];
    acc[p.category].push(p);
    return acc;
  }, {});
}

console.log(getLowStockProducts());
console.log(sortProductsByPrice());
console.log(calculateTotalInventoryValue());
console.log(groupByCategory());
