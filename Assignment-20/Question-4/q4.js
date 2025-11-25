document.addEventListener("DOMContentLoaded", () => {
  const API = "http://localhost:3004";

  const usersCard = document.querySelector("#usersCard .value");
  const ordersCard = document.querySelector("#ordersCard .value");
  const productsCard = document.querySelector("#productsCard .value");
  const warning = document.getElementById("warning");

  // Helper: fetch wrapper that returns JSON or throws
  function fetchData(url) {
    return fetch(url).then((res) => {
      if (!res.ok) {
        // Non-200 responses fail
        throw new Error("API failed: " + url);
      }
      return res.json();
    });
  }

  // Show skeleton while loading
  function showSkeletons() {
    usersCard.classList.add("skeleton");
    ordersCard.classList.add("skeleton");
    productsCard.classList.add("skeleton");
  }

  // Remove skeleton effect
  function removeSkeletons() {
    usersCard.classList.remove("skeleton");
    ordersCard.classList.remove("skeleton");
    productsCard.classList.remove("skeleton");
  }

  // Initial loading state
  showSkeletons();

  // Fetch all APIs in parallel using Promise.all
  Promise.all([
    fetchData(`${API}/users`),    // request 1
    fetchData(`${API}/orders`),   // request 2
    fetchData(`${API}/products`)  // request 3
  ])
    .then(([users, orders, products]) => {
      // All data arrived successfully
      removeSkeletons();

      usersCard.textContent = users.length;
      ordersCard.textContent = orders.length;
      productsCard.textContent = products.length;
    })
    .catch((error) => {
      // If ANY request fails → show warning
      console.error(error);
      removeSkeletons();
      warning.style.display = "block";

      // Keep UI meaningful
      usersCard.textContent = "--";
      ordersCard.textContent = "--";
      productsCard.textContent = "--";
    });
});
