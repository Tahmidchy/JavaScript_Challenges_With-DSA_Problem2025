/*
TODO: Example-28: Now we are testing on JavaScript Lexical Scope Concept.
*/

// Solution: Demonstrating JavaScript Lexical Scope Concept

function outerFunction() {
    let outerVariable = 'I am from outer function';

    function innerFunction() {
        console.log(outerVariable); // Accessing variable from outer function
    }
    innerFunction();
}
outerFunction(); // Output: I am from outer function
