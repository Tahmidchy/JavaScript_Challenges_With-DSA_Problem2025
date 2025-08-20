/*

TODO: Now We are testing on every() Method of Array
This method tests whether all elements in the array pass the test implemented by the provided function.

*/

// Example-14:

const scores = [80, 90, 100, 70, 60];
const allPassed = scores.every(score => score >= 60);
console.log(allPassed); // Output: true
// Explanation: The every() method checks if all scores in the array are 60 or above.
// In this case, all scores meet this condition, so the output is true. 