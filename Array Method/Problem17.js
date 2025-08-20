/*
TODO: Problem-17: Use reduce to find the product of all the numbers [1,2,3,4,5].
*/

// Solution: 

const numbers = [1, 2, 3, 4, 5];
const productOfNumbers = numbers.reduce((accumulator, current) => accumulator * current, 1);
console.log("Product of all numbers: ", productOfNumbers);