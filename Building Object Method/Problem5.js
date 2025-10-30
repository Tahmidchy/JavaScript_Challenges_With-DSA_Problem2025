/*
TODO: Problem-5: Find the smallest number among the seven numbers 45, 11, 89, 23, 56, -12, -56.
*/

// Solution: 

const numbers = [45, 11, 89, 23, 56, -12, -56];
const smallestNumber = Math.min(...numbers);
console.log("The smallest number is:", smallestNumber);
// Output: The smallest number is: -56