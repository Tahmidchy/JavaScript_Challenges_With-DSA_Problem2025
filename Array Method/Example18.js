/*
TODO: Example-18: In here we are testing on JavaScript Reduce () method. We are using the reduce() method to sum up all the numbers in an array, 
*/

// Example-18:

const numbers = [1, 2, 3, 4, 5];
const total = numbers.reduce((sum,num) => sum + num, 0);
console.log("Sum of numbers using reduce method: " + total);