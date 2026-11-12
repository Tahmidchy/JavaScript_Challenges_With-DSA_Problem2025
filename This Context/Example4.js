/*
TODO: Example-4: We are Testing the Javascript This Context. with using Normal Function.
*/

// Solution:

function doSomething(number) {
    console.log(this);
}
doSomething(5); // 'this' refers to the global object (window in browsers, global in Node.js)