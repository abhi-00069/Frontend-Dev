let product = " wireless headphones PRO ";
let cleaned = product.trim().toLowerCase().split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
cleaned = cleaned.replace("Pro", "Pro Edition");
console.log(cleaned);
console.log(cleaned.length);
