// Non-strict (may allow duplicate params and implicit globals)
function demoNonStrict(a, aDup) {
  total = 10;
  try { delete total; } catch(e) { console.log("delete failed:", e.message); }
  console.log("non-strict params:", a, aDup, "total:", typeof total !== "undefined" ? total : "undefined");
}
demoNonStrict(5, 10);

// Strict-correct version
(function() {
  "use strict";
  function demoStrict(a, b) {
    let total = 10;
    const deleted = delete total;
    console.log("strict params:", a, b, "total:", total, "deleteReturned:", deleted);
  }
  demoStrict(5, 10);
})();
