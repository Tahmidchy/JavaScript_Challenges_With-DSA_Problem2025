/*
TODO: Problem-5: You have a function that adds two numbers but takes a return statement. Now call that function and check the console to see if it returns.
*/

// Solution: Problem-5: Function without Return Statement

function addNumbers(a, b){
    let sum = a + b; // Calculate the sum of a and b
    // No return statement here
}
let result = addNumbers(5, 10); // Call the function with arguments 5 and 10
console.log("Result of addNumbers function:", result); // Output: Result of addNumbers function: undefined 