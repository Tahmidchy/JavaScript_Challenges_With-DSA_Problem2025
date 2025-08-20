/*
TODO: Problem-11: Create an array, where all elements are divisible by 5 and use the Every method to check if their values are divisible by 5.

*/

//Solution:

const numbers = [10, 20, 30, 40, 50];
const allDivisibleBy5 = numbers.every(num => num % 5 === 0);
console.log(allDivisibleBy5); // Output: true
// Explanation: The every() method checks if all elements in the array are divisible by 5   