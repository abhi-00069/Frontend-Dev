function respondFromServerA() {
  return new Promise((resolve, reject) => {
    const delayMs = 2000;
    setTimeout(() => {
      if (Math.random() < 0.2) {
        reject(new Error("Server A failed"));
        return;
      }
      resolve("Server A: Deployment success (2s)");
    }, delayMs);
  });
}

function respondFromServerB() {
  return new Promise((resolve, reject) => {
    const delayMs = 3000;
    setTimeout(() => {
      if (Math.random() < 0.2) {
        reject(new Error("Server B failed"));
        return;
      }
      resolve("Server B: Deployment success (3s)");
    }, delayMs);
  });
}

Promise.all([respondFromServerA(), respondFromServerB()])
  .then(results => {
    console.log("Deployment completed for all servers");
    results.forEach(r => console.log(r));
  })
  .catch(error => {
    console.error("Deployment failed for at least one server:", error.message);
  });

Promise.race([respondFromServerA(), respondFromServerB()])
  .then(fastestResult => {
    console.log("Fastest response:", fastestResult);
  })
  .catch(error => {
    console.error("Race encountered a failure:", error.message);
  });
