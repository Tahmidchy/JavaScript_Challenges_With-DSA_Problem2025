/*
TODO: Problem-9: Check by typing 'false' in an if condition. Does 'false' behave as a true type value or not?
*/

// Problem-9: Check by typing 'false' in an if condition. Does 'false' behave as a true type value or not?

const value = false;
if(!!value) {
    console.log("Value is truthy");
} else {
    console.log("Value is falsy");
}