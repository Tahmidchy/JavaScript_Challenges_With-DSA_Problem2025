/*
TODO: Problem-4: Create a function that takes a number and squares it, defaulting to 1 if no number is given.
*/

// Solution: 

function squareNumber(num = 1) {
    return num * num;
};
// Example usage:
console.log(squareNumber(5)); // Output: 25 (5 squared)
console.log(squareNumber()); // Output: 1 (default value squared)