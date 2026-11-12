/*
TODO: Example-13: Now we are testing on JavaScript Closure. 
*/

// Solution:

function counter() {
    let count = 0;
    count++;
    return function innerFunction() {

    };
};

// Example usage:
const myCounter = counter();

// Explanation:
// In this example, we have a function called `counter` that initializes a variable `count` to 0 and increments it by 1. 
// The `counter` function then returns an inner function called `innerFunction`. 
// This inner function has access to the `count` variable due to closure, even after the outer function has finished executing. 
// When we call `myCounter()`, it logs the value of `count`, which is 1 in this case.