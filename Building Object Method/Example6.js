/*
TODO: Example-6: We are testing on Function Constructor method to create a function that adds two numbers
*/

// Example-6: Create a function that adds two numbers using Function constructor

const add = new Function("a", "b", "return a + b;");

const result = add(5, 10);
console.log(result); // Output: 15
console.log(typeof add); // Output: "function"