/*
TODO: Problem-10: Create a function that takes an object parameter. The object will be salary and tax. If no object is passed, the default salary will be set to 50000 and tax will be 10. Inside the function, find the tax amount by using the tax percentage. Then subtract the amount from the salary and return the result.
*/

// Solution:

function calculateNetSalary({ salary = 50000, tax = 10 } = {}) {
    const taxAmount = (salary * tax) / 100;
    return salary - taxAmount;
};
// Example usage:
console.log(calculateNetSalary({ salary: 60000, tax: 15 })); // Output: 51000
console.log(calculateNetSalary({ salary: 70000 })); // Output: 63000 (default tax 10%)
console.log(calculateNetSalary()); // Output: 45000 (default salary 50000, tax 10%)
console.log(calculateNetSalary({ tax: 20 })); // Output: 40000 // (default salary 50000, tax 20%)