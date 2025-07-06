/*
TODO: Problem-23: Create a function that adds two numbers, assuming the first number is 10 if it is not present, and 5 if it is not present. This is done using the arrow function.
*/

// Solution: 

const addNumbers = (num = 10, num2 = 5) => {
    return num + num2;
};
// Example usage:
console.log(addNumbers(3, 4)); // Output: 7
console.log(addNumbers(3));    // Output: 8 (3 + 5)
console.log(addNumbers());     // Output: 15 (10 + 5)