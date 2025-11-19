"use strict";
function generatePyramid(limit = 5) {
  for (let i = 1; i <= limit; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) line += "* ";
    console.log(line.trim());
  }
}

function generatePyramidVar(limit = 5) {
  for (var i = 1; i <= limit; i++) {
    var line = "";
    for (var j = 1; j <= i; j++) line += "* ";
    console.log(line.trim());
  }
}

generatePyramid(4);
console.log("--- using var ---");
generatePyramidVar(4);
