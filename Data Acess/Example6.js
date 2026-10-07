/*
TODO: Example-6: Nullish Coalescing Operator (??)
 */

const userAge = 0;
const age = userAge ?? 18; // If userAge is null or undefined, age will be 18
console.log(age); // Output: 0

//TODO: Example-6: Nullish coalescing operator with || or

let userAge2 = 0;
let age2 = userAge2 || 18;
console.log(age2); // Output: 18, because 0 is falsy and || returns the right-hand side