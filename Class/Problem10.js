/*
TODO: Problem-10: Create an `Employee` class containing the employee's name, designation, and salary; include a `getSalary` method that returns the salary amount.
*/

// Solution:

class Employee {
    constructor(name, designation, salary) {
        this.name = name;
        this.designation = designation;
        this.salary = salary;
    }
    getSalary() {
        return this.salary;
    }
};

const employee1 = new Employee("John Doe", "Software Engineer", 80000);
console.log("Employee Salary:", employee1.getSalary());