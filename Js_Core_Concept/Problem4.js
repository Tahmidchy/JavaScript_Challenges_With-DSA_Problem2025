/*
TODO: Problem-4: You declared a variable, but didn't assigned any value, this time print that variable to the console and see what comes up.
*/

// Solution: Problem-4: Undefined Variable

let YourName = ""; // Variable declared but not assigned any value
console.log(YourName); // Output: undefined

// In here using empty string to represent unassigned value, so it prints an empty line in the console instead of 'undefined' , because in JavaScript, a variable that is declared but not assigned a value is 'undefined'. However, if you want to see 'undefined' explicitly, you can simply declare the variable without initializing it, like this:
// let YourName; 
// console.log(YourName); // This will print 'undefined' to the console 
// But in this case, we used an empty string to avoid confusion and make it clear that the variable is intentionally left without a value.
// Note: In JavaScript, 'undefined' is a primitive value that indicates that a variable has not been assigned a value. It is different from 'null', which is an assignment value that represents the intentional absence of any object value.