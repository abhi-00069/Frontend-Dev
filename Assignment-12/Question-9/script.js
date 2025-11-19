let results = [];
let nums = [];
for (let i = 1; i <= 30; i++) nums.push(i);

for (let n of nums) {
    if (n % 3 === 0 && n % 5 === 0) results.push("FizzBuzz");
    else if (n % 2 === 0) results.push("Even");
    else results.push("Odd");
}

console.log(results);
