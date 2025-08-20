/*
TODO: Problem-14: You have an array [5,10,15,20,25], write a program to find the sum of all the numbers using reduce.
*/

// Solution: 

const numbers = [5, 10, 15, 20, 25];
const sum = numbers.reduce((accumulator, current)=> accumulator + current, 0);
console.log("Sum of all numbers: ", sum);