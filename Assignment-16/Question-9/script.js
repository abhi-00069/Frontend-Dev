// Prediction (write this before running):
// Predicted output order:
// 1) "Script start"
// 2) "Script end"
// 3) "Promise callback"    <- microtask runs after current stack
// 4) "Timeout callback"    <- macrotask runs after microtasks

console.log("Script start");

setTimeout(() => console.log("Timeout callback"), 0);

Promise.resolve().then(() => console.log("Promise callback"));

console.log("Script end");

/*
Explanation:
- The synchronous logs ("Script start", "Script end") run first in the current call stack.
- Promise callbacks are microtasks and are executed immediately after the current call stack completes.
- setTimeout callbacks are macrotasks and run after microtasks are drained.
Therefore microtasks (Promises) run before macrotasks (setTimeout).
*/
