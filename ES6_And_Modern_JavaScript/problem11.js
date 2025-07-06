/*
TODO: Problem-11: The template will display the result of subtracting two numbers via a string. For example: The difference between 100 and 20 is 80.
*/

// Solution:
function subtractAndDisplay(num1, num2) {
    const difference = num1 - num2;
    return `The difference between ${num1} and ${num2} is ${difference}.`;
};
// Example usage:
console.log(subtractAndDisplay(100, 20)); // Output: The difference between 100 and 20 is 80.