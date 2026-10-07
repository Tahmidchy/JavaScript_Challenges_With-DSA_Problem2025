/*
TODO: Problem-8: Let x = null; What will be the output if `x ??= 75` is used in this case?
*/

//Solution:

let x = null;
x ??= 75;
console.log(x); // Output: 75, because x is null, so the nullish coalescing assignment operator assigns 75 to x