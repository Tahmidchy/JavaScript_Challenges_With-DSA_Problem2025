/*
TODO: Problem-19: Create an array [100,200,300,400], use reduce to find the sum of all the numbers and use 50 as the initial value.
*/

// Solution:
const numbers = [100, 200, 300, 400];
const sumWithInitial = numbers.reduce((accumulator, current) => accumulator + current, 50);
console.log("Sum of all numbers with initial value 50: ", sumWithInitial);