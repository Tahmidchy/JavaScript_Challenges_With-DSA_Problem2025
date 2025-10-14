/*
TODO: Problem-24: Declare a global variable taxRate whose value will be 15%, where the value of taxRate refers to the tax rate in percentage. Then write a function that takes a person's income as input, then returns the tax amount using the taxRate as a percentage inside the function.
*/

// Solution: Now we will declare a global variable taxRate and then create a function to calculate the tax amount based on the given income.

let taxRate = 15; // Global variable representing the tax rate in percentage

function calculateTax(income) {
    // Calculate the tax amount based on the income and tax rate
    let taxAmount = (income * taxRate) / 100;
    return taxAmount;
}
// Example usage:
let income = 50000; // Example income
let tax = calculateTax(income);
console.log(`The tax amount for an income of $${income} is $${tax}.`);

// Output: The tax amount for an income of $50000 is $7500.
