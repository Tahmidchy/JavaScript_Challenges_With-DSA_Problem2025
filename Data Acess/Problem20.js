/*
TODO: Problem-20: Consider a falsy variable `tomato = 0`. If we use `mango && = 5` with it, what will the output be, and why?
*/

// Solution:

let tomato = 0;
tomato &&= 5;
console.log(tomato); // Output: 0, because the logical AND assignment operator does not assign 5 to `tomato` since it is falsy (0).