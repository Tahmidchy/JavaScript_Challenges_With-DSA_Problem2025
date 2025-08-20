/*
TODO: Example-19: In here we are testing on JavaScript Reduce () method. We are using the reduce() method to find the maximum number in an array.
*/

// Example-19: 

const numbers = [1, 2, 3, 4, 5];
const total = numbers.reduce((p,c) => p + c, 0);
console.log("Sum of numbers using reduce method: " + total);