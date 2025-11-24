async function fetchProductsAndDisplay() {
  try {
    if (typeof fetch === "undefined") {
      console.warn("fetch() is not available in this environment. In Node.js use Node 18+ or a fetch polyfill.");
    }

    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) throw new Error(`Network response was not ok: ${response.status}`);
    const products = await response.json();

    products.forEach(product => {
      console.log("Product:", product.title);
      console.log("Price: $" + product.price);
      console.log("Image:", product.image);
      console.log("-----");
    });

    // Bonus: create DOM product cards when running in a browser
    if (typeof document !== "undefined") {
      const container = document.createElement("div");
      container.id = "product-cards";
      container.style.display = "grid";
      container.style.gridTemplateColumns = "repeat(auto-fit, minmax(200px, 1fr))";
      container.style.gap = "12px";
      products.forEach(product => {
        const card = document.createElement("div");
        card.style.border = "1px solid #ddd";
        card.style.padding = "8px";
        card.style.borderRadius = "6px";
        const titleEl = document.createElement("h4");
        titleEl.innerText = product.title;
        const priceEl = document.createElement("p");
        priceEl.innerText = `$${product.price}`;
        const imgEl = document.createElement("img");
        imgEl.src = product.image;
        imgEl.alt = product.title;
        imgEl.style.maxWidth = "100%";
        imgEl.style.height = "150px";
        imgEl.style.objectFit = "contain";
        card.appendChild(imgEl);
        card.appendChild(titleEl);
        card.appendChild(priceEl);
        container.appendChild(card);
      });
      document.body.appendChild(container);
    }
  } catch (err) {
    console.error("Failed to load products. Please try again.", err.message);
  }
}

fetchProductsAndDisplay();
