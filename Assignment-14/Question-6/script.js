class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        this.salary += this.salary * percent / 100;
    }
}

const employees = [
    new Employee(1, "Amit", "Tech", 50000),
    new Employee(2, "Sara", "HR", 40000),
    new Employee(3, "Raj", "Finance", 45000),
    new Employee(4, "Kiran", "Tech", 55000),
    new Employee(5, "Rita", "Support", 35000),
];

employees.forEach(e => console.log(e.name, e.getAnnualSalary()));

const totalAnnual = employees.reduce((sum, emp) => sum + emp.getAnnualSalary(), 0);
console.log("Total Annual Payout:", totalAnnual);
