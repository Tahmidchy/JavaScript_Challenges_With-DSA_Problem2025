/*
TODO: Problem-13: Set a variable `a` to 59, then perform both post-increment and pre-increment operations on it and observe the output.
*/

// Solution:

let a = 59;
let postIncrement = a++;
let preIncrement = ++a;

console.log("Post-increment value:", postIncrement); // Output: Post-increment value: 59
console.log("Pre-increment value:", preIncrement);   // Output: Pre-increment value: 61