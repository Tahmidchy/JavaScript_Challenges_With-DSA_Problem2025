/*
TODO: Problem-13: Create an array called ages and check if everyone is over 18?
*/

//Solution:

const ages = [20, 25, 30, 17, 22];
const allOver18 = ages.every(age => age > 18);
console.log(allOver18); // Output: false
// Explanation: The every() method checks if all elements in the array are divisible by 5   