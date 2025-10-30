/*
TODO: Problem-9: Convert 3.1 and 6.9 to their nearest larger integer.
*/

// Solution:

const num1 = 3.1;
const num2 = 6.9;
const ceiledNum1 = Math.ceil(num1);
const ceiledNum2 = Math.ceil(num2);
console.log("3.1 rounded to nearest larger integer is:", ceiledNum1);
console.log("6.9 rounded to nearest larger integer is:", ceiledNum2);
// Output: 
// 3.1 rounded to nearest larger integer is: 4
// 6.9 rounded to nearest larger integer is: 7