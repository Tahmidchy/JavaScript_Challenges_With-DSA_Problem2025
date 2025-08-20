/*
TODO: Example-1: In here An Array Method but we are testing simple function but we are using array method 
*/

function doubleAll(numbers) {
    const doubled = [];
    for (const number of numbers) {
        const value = number * 2;
        doubled.push(value);
    }
    return doubled;
}
// Test the function
const numbers = [1, 2, 3, 4, 5];
console.log(doubleAll(numbers)); // Output: [2, 4, 6, 8, 10]