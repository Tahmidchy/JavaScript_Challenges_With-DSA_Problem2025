/*
TODO: Problem-11: const Declare a variable named 'view', and in the line preceding its declaration, divide this variable by 2—what will the quotient be?
*/

// Solution:

// Attempting to divide the variable 'view' by 2 before its declaration will result in a ReferenceError because the variable is not yet defined in the scope. 
// In JavaScript, variables declared with 'const' are not hoisted in the same way as 'var', and they cannot be accessed before their declaration.

// code snippet:
// Uncommenting the following line will throw a ReferenceError
// console.log(view / 2); // ReferenceError: Cannot access 'view' before initialization