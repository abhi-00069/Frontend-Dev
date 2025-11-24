console.log("Start");

setTimeout(() => {
  console.log("Macrotask: setTimeout callback");
}, 0);

Promise.resolve().then(() => {
  console.log("Microtask: Promise.then callback");
});

console.log("Synchronous log");
console.log("End");

/*
Expected order explanation:
1. "Start"    -> synchronous
2. setTimeout scheduled but not executed immediately (macrotask)
3. Promise.then scheduled as microtask
4. "Synchronous log" runs immediately
5. "End" runs immediately
6. Microtasks run after current stack finishes, so "Microtask: Promise.then callback"
7. Macrotasks run after microtasks, so "Macrotask: setTimeout callback"

Microtasks (Promise.then callbacks) have priority and run right after the current call stack,
before macrotasks like setTimeout callbacks.
*/
