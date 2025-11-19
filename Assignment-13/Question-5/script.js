console.log("Predict/Observe section:");
console.log(score);
announce();
var score = 50;
function announce() { console.log("Game started"); }
let status = "ready";
startGame();
function startGame() { console.log(status); }

console.log("Explanation run-corrected:");
let correctedScore = 50;
console.log(correctedScore);
const announceFixed = () => console.log("Game started (arrow)");
announceFixed();
const statusFixed = "ready";
const startGameFixed = () => console.log(statusFixed);
startGameFixed();
