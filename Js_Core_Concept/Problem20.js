/*
TODO: Problem-20: Write a function, call another function inside it by passing it as a parameter, and see the result.
*/

// Solution: Function that takes another function as a parameter and calls it

function greet(name, callback) {
    const message = `Hello, ${name}!`;
    callback(message);
};
// Callback function to display the greeting message
function displayMessage(msg) {
    console.log(msg);
};
// Calling the greet function and passing displayMessage as a callback
greet("Alice", displayMessage); // Output: Hello, Alice!