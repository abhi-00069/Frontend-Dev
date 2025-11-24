function submitOrder(orderData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() >= 0.5; // 50% success rate
      if (success) resolve("Order submitted successfully");
      else reject(new Error("Order submission failed"));
    }, 500);
  });
}

async function processOrder(orderData) {
  const maxAttempts = 3;
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const result = await submitOrder(orderData);
      console.log(`Attempt ${attempt}: Success`);
      return result;
    } catch (err) {
      console.warn(`Attempt ${attempt}: Failed`);
      if (attempt === maxAttempts) {
        throw new Error("Order could not be processed");
      }
      // optional small delay before retry
      await new Promise(r => setTimeout(r, 300));
    }
  }
}

(async () => {
  try {
    const finalResult = await processOrder({ id: 123, items: [1, 2] });
    console.log("Process finished:", finalResult);
  } catch (err) {
    console.error(err.message);
  }
})();
