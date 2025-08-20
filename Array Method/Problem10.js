/*
TODO: Problem-10: Create an array, called numbers, and check if there are any numbers greater than 100 in this array.
*/

//Solution:

const numbers = [50, 75, 120, 90, 200, 30];
const hasGreaterThan100 = numbers.some(num => num > 100);
console.log(hasGreaterThan100); // Output: true
// Explanation: The some() method checks if there is at least one number in the array that is greater than 100.
// In this case, there are numbers like 120 and 200 that meet this condition,  