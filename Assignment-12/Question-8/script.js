const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

let total = 0;
for (let c of cart) {
    let price = c.price;
    if (c.category === "electronics") price -= price * 0.10;
    else if (c.category === "fashion") price -= price * 0.05;
    total += price;
}

if (total > 50000) total -= total * 0.05;

console.log(total);
