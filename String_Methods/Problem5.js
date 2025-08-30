/*
TODO: Problem-5: const text = 'Immutable';Find the length of a string and check if it is mutable.
*/

//Solution: 

const text = 'Immutable';
const lengthOfString = text.length; // Get the length of the string 
console.log(lengthOfString); // Output: 9
// Strings are immutable in JavaScript, so we cannot change the original string.
// Any operation that seems to modify a string actually creates a new string.
