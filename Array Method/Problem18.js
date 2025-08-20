/*
TODO: Problem-18: [10,20,30,40,50] Find the maximum number of men using reduce in this array.
*/

// Solution:

const numbers = [10, 20, 30, 40, 50];
const maxNumber = numbers.reduce((accumulator, current) => Math.max(accumulator, current), numbers[0]);
console.log("Maximum number in the array: ", maxNumber);