/*
TODO: Problem-23: You will call another function from within a function, for example, the greetingHandler() function is called inside the greeting function. This time, you will write a program where the first function will call another function and the output of the function will be displayed in the console.
*/

// Solution: Function that calls another function and displays the output

function greeting(name, callback) {
    const message = `Hello, ${name}!`;
    callback(message);
}
// Callback function to display the greeting message
function greetingHandler(message) {
    console.log(message);
}
// Example name
const name = "Alice";
// Calling the function with the name and the callback
greeting(name, greetingHandler);
// Output: Hello, Alice!

// Explanation:
// 1. The greeting function takes a name and a callback function as parameters.
// 2. It creates a greeting message using the provided name.
// 3. The callback function is then called with the greeting message as its argument.
// 4. The greetingHandler function is defined to log the message to the console.
// 5. Finally, we call greeting with an example name ("Alice") and the greetingHandler callback to see the output.
