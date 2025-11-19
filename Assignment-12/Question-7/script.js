let feedback = "Great product! Fast delivery and amazing sound quality!";
let words = feedback.split(" ").length;
let check = feedback.toLowerCase().includes("bad") || feedback.toLowerCase().includes("poor");
console.log(words);
console.log(check ? "Needs Improvement" : "Positive Feedback");
