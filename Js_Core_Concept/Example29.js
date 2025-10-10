/*
TODO: Example-29: Now we are testing on JavaScript Scope chain Concept.
*/

// Solution: Demonstrating JavaScript  Scope chain Concept

let name = "John"; // Global variable

function first() {
    let name = "Alex"; // Local variable in first function

    function second() {
        console.log(name); // Accessing variable from first function
    }
    second();
}
first(); // Output: Alex