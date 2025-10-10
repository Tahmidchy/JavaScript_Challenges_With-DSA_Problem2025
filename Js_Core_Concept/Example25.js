/*
TODO: Example-25: Now we are testing on JavaScript Block Scope concept.
*/

// Solution: Demonstrating JavaScript Block Scope concept

const smart = true;
if(smart) {
    let message = "prochur gorom";
    console.log(message); // Output: prochur gorom
}
// trying to access 'message' outside the block will cause an error
console.log (message); // ReferenceError: message is not defined

