/*
TODO: Example-11: Logical AND (&&) and Logical OR (||) operators in JavaScript.
*/

let mango = 10;
mango &&= 5; // This will assign 5 to mango only if mango is truthy (which it is, since it's 10)
console.log(mango); // Output: 5

let apple = 0;
apple &&= 5; // This will not assign 5 to apple because apple is falsy (0)
console.log(apple); // Output: 0