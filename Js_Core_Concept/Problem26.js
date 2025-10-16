/*
TODO: Problem-26: Declare the temperature variable inside an if block with a let, and try accessing it from outside that block.
*/

// Solution: We will declare a variable temperature using let inside an if block and then try to access it from outside that block.

if (true) { // Example if block
    let temperature = 30; // Variable declared with let inside the if block
    console.log("Inside the if block, the temperature is:", temperature); // Accessing temperature inside the block
}

// Trying to access temperature from outside the if block
console.log("Outside the if block, the temperature is:", temperature); // This will throw an error because temperature is not accessible here   
// Output: ReferenceError: temperature is not defined
// This error occurs because temperature is scoped to the if block and cannot be accessed from outside.