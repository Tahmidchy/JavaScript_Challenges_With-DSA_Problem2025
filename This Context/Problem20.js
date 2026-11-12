/*
TODO: problem-20 : Write a function that determines which of two numbers is larger. Then, call this function—using the values ​​87 and 12—before it has been declared. Log the returned result to the console. Where you perform the console log, add a comment explaining how you are able to use the function before it has been declared.
*/

// Solution:

// In JavaScript, function declarations are hoisted to the top of their containing scope. This means that you can call a function before it has been declared in the code, and it will still work correctly. The function declaration is moved to the top of its scope during the compilation phase, allowing it to be accessible anywhere within that scope.

function largerNumber(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

// Calling the function before its declaration
console.log(largerNumber(87, 12)); // This works because function declarations are hoisted, allowing us to call the function before its declaration.

