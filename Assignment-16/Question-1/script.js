function delayBetween(minMs = 1000, maxMs = 2000) {
  return Math.floor(Math.random() * (maxMs - minMs + 1)) + minMs;
}

function boilWater() {
  return new Promise((resolve, reject) => {
    const ms = delayBetween();
    setTimeout(() => {
      if (Math.random() < 0.15) {
        reject(new Error("Boiler malfunction"));
        return;
      }
      console.log("Step 1: Water boiled");
      resolve("Boiled water");
    }, ms);
  });
}

function brewCoffee(boiledWater) {
  return new Promise((resolve, reject) => {
    const ms = delayBetween();
    setTimeout(() => {
      if (Math.random() < 0.15) {
        reject(new Error("Coffee grounds missing"));
        return;
      }
      console.log("Step 2: Coffee brewed using ->", boiledWater);
      resolve("Brewed coffee");
    }, ms);
  });
}

function pourIntoCup(brewedCoffee) {
  return new Promise((resolve, reject) => {
    const ms = delayBetween();
    setTimeout(() => {
      if (Math.random() < 0.15) {
        reject(new Error("Cup not available"));
        return;
      }
      console.log("Step 3: Poured into cup ->", brewedCoffee);
      resolve("Coffee ready for the team!");
    }, ms);
  });
}

console.log("Starting coffee process (promise chaining)...");
boilWater()
  .then(resultOfBoiling => brewCoffee(resultOfBoiling))
  .then(resultOfBrewing => pourIntoCup(resultOfBrewing))
  .then(message => {
    console.log(message);
  })
  .catch(error => {
    console.error("Coffee process failed:", error.message);
  });
