function outer() {
  console.log("outer before var count:", count);
  var count = 5;
  function inner() {
    console.log("inner before var count:", count);
    var count = 10;
    console.log("inner after var count:", count);
  }
  inner();
  console.log("outer after inner:", count);
}
outer();

console.log("--- arrow inner variant ---");

function outerArrow() {
  console.log("outerArrow before var count:", countA);
  var countA = 5;
  const innerArrow = () => {
    console.log("innerArrow uses outer countA:", countA);
  };
  innerArrow();
  console.log("outerArrow after:", countA);
}
outerArrow();
debugger;
