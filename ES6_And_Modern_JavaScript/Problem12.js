/*
TODO: Problem 12: Create an object Employee, which will contain name, age, and salary. The template string will display his name, age, and salary.
*/

// Solution: 

function Employee(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
    this.displayInfo = function() {
        return `Employee Name: ${this.name}, Age: ${this.age}, Salary: $${this.salary}`;
    };
};
// Example usage:
const emp1 = new Employee("John Doe", 30, 50000);
console.log(emp1.displayInfo()); // Output: Employee Name: John Doe, Age: 30, Salary: $50000