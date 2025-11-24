function randomDelayBetween(minMs = 1000, maxMs = 2000) {
  return Math.floor(Math.random() * (maxMs - minMs + 1)) + minMs;
}

function stepWithPossibleFailure(stepName) {
  return new Promise((resolve, reject) => {
    const delayMs = randomDelayBetween();
    setTimeout(() => {
      const didFail = Math.random() < 0.18; // ~18% failure at each step
      if (didFail) {
        reject(new Error(`${stepName} failed`));
      } else {
        resolve(`${stepName} done`);
      }
    }, delayMs);
  });
}

/*
Pipeline steps:
- takeOrder -> prepare -> pack -> dispatch -> deliver
Each returns a Promise. runPipeline uses async/await and try/catch to run sequentially.
*/

function takeOrder() {
  return stepWithPossibleFailure("Step 1: Order taken");
}

function prepare() {
  return stepWithPossibleFailure("Step 2: Food prepared");
}

function pack() {
  return stepWithPossibleFailure("Step 3: Package ready");
}

function dispatch() {
  return stepWithPossibleFailure("Step 4: Out for delivery");
}

function deliver() {
  return stepWithPossibleFailure("Delivery completed!");
}

async function runPipeline() {
  console.log("Start Pipeline");

  /*
  Async behavior explanation:
  - Each await pauses the async function execution until the awaited Promise settles.
  - While the async function awaits, the JS event loop is free to run other tasks (microtasks and macrotasks).
  - Awaited promises are still asynchronous; they don't block the main thread.
  - Errors thrown by awaited promises can be caught with try/catch.
  */

  try {
    const step1 = await takeOrder();
    console.log(step1);

    const step2 = await prepare();
    console.log(step2);

    const step3 = await pack();
    console.log(step3);

    const step4 = await dispatch();
    console.log(step4);

    const finalDelivery = await deliver();
    console.log(finalDelivery);

    console.log("Delivery completed!");
  } catch (err) {
    console.error("Pipeline failed!", err.message);
  }
}

runPipeline();
