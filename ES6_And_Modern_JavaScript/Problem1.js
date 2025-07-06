/*
TODO: Problem-1: Write a function that will find the sum of three numbers. Set each parameter to 0 as the default value.
*/

// Solution:

function sumOfThreeNumbers(a = 0, b = 0, c = 0) {
    return a + b + c;
};
// Example usage:
console.log(sumOfThreeNumbers(1, 2, 3)); // Output:6
console.log(sumOfThreeNumbers(5)); // Output: 5 (b and c default to 0)
console.log(sumOfThreeNumbers()); // Output: 0 (all parameters default to 0)
console.log(sumOfThreeNumbers(10, 20)); // Output: 30 (c defaults to 0)
console.log(sumOfThreeNumbers(1, 2, -3)); // Output: 0 (1 + 2 - 3 = 0)
console.log(sumOfThreeNumbers(0, 0, 0)); // Output: 0 (all parameters are 0)
console.log(sumOfThreeNumbers(100, 200, 300)); // Output: 600 (100 + 200 + 300 = 600)
console.log(sumOfThreeNumbers(-1, -2, -3)); // Output: -6 (-1 - 2 - 3 = -6)
console.log(sumOfThreeNumbers(1.5, 2.5, 3.5)); // Output: 7.5 (1.5 + 2.5 + 3.5 = 7.5)
console.log(sumOfThreeNumbers(1, 2, 3.5)); // Output    : 6.5 (1 + 2 + 3.5 = 6.5)
console.log(sumOfThreeNumbers(0.1, 0.2, 0.3)); // Output: 0.6 (0.1 + 0.2 + 0.3 = 0.6)
console.log(sumOfThreeNumbers(1, -1, 0)); // Output: 0 (1 - 1 + 0 = 0)