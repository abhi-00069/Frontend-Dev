let salary = 550000;
const increment = 8;
const rows = [];
for (let year = 1; year <= 5; year++) {
  salary += (salary * increment) / 100;
  rows.push({ Year: year, Salary: Math.round(salary) });
}
console.table(rows);
