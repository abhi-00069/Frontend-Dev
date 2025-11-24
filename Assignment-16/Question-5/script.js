function delay(ms = 1000) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/* PART A: Callback hell demonstration */
function designStep(callback) {
  setTimeout(() => {
    console.log("design");
    callback();
  }, 1000);
}

function buildStep(callback) {
  setTimeout(() => {
    console.log("build");
    callback();
  }, 1000);
}

function testStep(callback) {
  setTimeout(() => {
    console.log("test");
    callback();
  }, 1000);
}

function deployStep(callback) {
  setTimeout(() => {
    console.log("deploy");
    callback();
  }, 1000);
}

function celebrateStep(callback) {
  setTimeout(() => {
    console.log("celebrate");
    callback();
  }, 1000);
}

console.log("Callback-hell pipeline start");
designStep(() => {
  buildStep(() => {
    testStep(() => {
      deployStep(() => {
        celebrateStep(() => {
          console.log("Callback-hell pipeline finished");
        });
      });
    });
  });
});

/* PART B: Cleaner pipeline using async/await */
function designAsync() {
  return new Promise(resolve => setTimeout(() => {
    console.log("design");
    resolve();
  }, 1000));
}

function buildAsync() {
  return new Promise(resolve => setTimeout(() => {
    console.log("build");
    resolve();
  }, 1000));
}

function testAsync() {
  return new Promise(resolve => setTimeout(() => {
    console.log("test");
    resolve();
  }, 1000));
}

function deployAsync() {
  return new Promise(resolve => setTimeout(() => {
    console.log("deploy");
    resolve();
  }, 1000));
}

function celebrateAsync() {
  return new Promise(resolve => setTimeout(() => {
    console.log("celebrate");
    resolve();
  }, 1000));
}

async function runPipelineAsync() {
  console.log("Async/await pipeline start");
  try {
    await designAsync();
    await buildAsync();
    await testAsync();
    await deployAsync();
    await celebrateAsync();
    console.log("Async/await pipeline finished");
  } catch (err) {
    console.error("Pipeline failed:", err.message);
  }
}

runPipelineAsync();

/*
Why async/await improves readability:
- Converts a nested callback chain into a linear top-to-bottom flow.
- Error handling becomes straightforward with try/catch rather than handling errors in multiple nested callbacks.
- The code reads like synchronous code even though it is asynchronous.
*/
