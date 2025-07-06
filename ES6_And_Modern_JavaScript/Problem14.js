/*
TODO: Problem-14: If const a = 50 ; and const b = 10 ; then check with the template string The division of a and b is 5
*/

// Solution:
function divideAndDisplay(a, b) {
    if (b === 0) {
        return "Division by zero is not allowed.";
    }
    const result = a / b;
    return `The division of ${a} and ${b} is ${result}.`;
};

// Example usage:
const a = 50;
const b = 10;
console.log(divideAndDisplay(a, b)); // Output: The division of 50 and 10 is 5.