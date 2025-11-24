// Original callback-style (for reference; not executed)
function fetchBugs(callback) {
  setTimeout(() => callback(["UI glitch", "API timeout", "Login failure"]), 1000);
}

// Promise-based version
function getBugs() {
  return new Promise((resolve, reject) => {
    const simulatedNetworkDelay = 1000;
    setTimeout(() => {
      const simulateApiFailure = Math.random() < 0.25; // 25% chance to fail
      if (simulateApiFailure) {
        reject(new Error("Failed to fetch bugs from server"));
        return;
      }
      resolve(["UI glitch", "API timeout", "Login failure"]);
    }, simulatedNetworkDelay);
  });
}

getBugs()
  .then(bugsArray => {
    console.log("Fetched bugs:");
    console.table(bugsArray.map((bug, index) => ({ id: index + 1, bug })));
  })
  .catch(err => {
    console.error("Error while fetching bugs:", err.message);
  });
