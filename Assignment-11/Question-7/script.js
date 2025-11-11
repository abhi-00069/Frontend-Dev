const secret = Math.floor(Math.random() * 50) + 1;
const userGuess = 7;
let message;
if (userGuess === secret) message = "Correct guess!";
else {
  const diff = Math.abs(userGuess - secret);
  if (diff <= 3) message = "Very close!";
  else if (userGuess > secret) message = "Too high";
  else message = "Too low";
}
console.log("Secret:", secret);
console.log("Guess:", userGuess);
console.log(message);
