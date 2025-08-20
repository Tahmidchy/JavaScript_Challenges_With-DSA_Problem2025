/*
TODO: Now we are testing on every() Method of Array
This method tests whether all elements in the array pass the test implemented by the provided function.
*/

// Example-15:

const scores = [80, 90, 100, 70, 60];
const allPassed = scores.every(score => score >= 150);
console.log(allPassed); // Output: false
// Explanation: The every() method checks if all scores in the array are 150 or above.
// In this case, none of the scores meet this condition, so the output is false.