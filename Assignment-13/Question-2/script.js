"use strict";
const employees = [
  { name: "Amit", salary: "45000", years: "5" },
  { name: "Sara", salary: "38000", years: "2" },
  { name: "Kiran", salary: "52000", years: "7" }
];

employees.forEach(emp => {
  try {
    if (!emp.name || emp.salary == null || emp.years == null) throw new Error("Missing property");
    const salary = Number(emp.salary);
    const years = Number(emp.years);
    if (Number.isNaN(salary) || Number.isNaN(years)) throw new Error("Invalid number conversion");
    const bonus = years > 3 ? salary * 0.1 : salary * 0.05;
    const total = salary + bonus;
    console.log(`Employee: ${emp.name} | Salary: ${salary} | Years: ${years} | Bonus: ${bonus} | Total: ${total}`);
  } catch (err) {
    console.log(`Error processing employee ${emp && emp.name ? emp.name : JSON.stringify(emp)} -> ${err.message}`);
  }
});
