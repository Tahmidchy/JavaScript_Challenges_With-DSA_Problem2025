/*
TODO: Problem-12: Create an array named word and check if at least one word is equal to "hello"?
*/

//Solution:

const words = ["hi", "hello", "goodbye", "welcome"];
const hasHello = words.some(word => word === "hello");
console.log(hasHello); // Output: true
// Explanation: The some() method checks if there is at least one word in the array that is equal to "hello".
// In this case, the word "hello" is present in the array, so the output is true.
// demonstrating the use of the some() method.