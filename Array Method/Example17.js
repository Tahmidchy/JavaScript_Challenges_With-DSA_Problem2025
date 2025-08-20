/*
TODO: Example-17: In here we are testing on JavaScript Reduce () method. We are using the reduce() method to sum up all the numbers in an array. but now we are check simple array with function.
*/

// Example-17: 

const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for(const number of numbers) {
    sum += number;
}
console.log("Sum of numbers using for loop: " + sum);