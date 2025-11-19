const departments = [
    ["HR", 72],
    ["Finance", 88],
    ["Tech", 95],
    ["Support", 63]
];

for (let d of departments) {
    let score = d[1];
    if (score >= 90) console.log("Excellent");
    else if (score >= 75) console.log("Good");
    else if (score >= 60) console.log("Average");
    else console.log("Needs Improvement");
}
