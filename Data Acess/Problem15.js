/*
TODO: Problem-15: Consider a variable `mango = 20`. If `mango &&= 10` is used, what will be the new value of the variable, and why?
*/

// Solution:

let mango = 20;
mango &&= 10;
console.log(mango); // Output: 10

// Explanation: The logical AND assignment operator (&&=) assigns the right-hand value (10) to the variable `mango` only if `mango` is truthy. Since `mango` is initially 20 (which is truthy), it gets updated to 10.