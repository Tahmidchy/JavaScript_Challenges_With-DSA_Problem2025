/*
TODO: In here We are testing on some() Method of Array
This method tests whether at least one element in the array passes the test implemented by the provided function.
*/

// Example-13: 

const scores = [80, 90, 100, 70, 60];
const hasPassed = scores.some(score => score >= 60);
console.log(hasPassed); // Output: true
// Explanation: The some() method checks if there is at least one score in the array that is 60 or above.
// In this case, there are several scores that meet this condition, so the output is true.