/*
TODO: Problem-14: You create two separate objects, then check with triple equals whether they are equal or not. If they are equal, think about why they are equal and mention it in the form of a comment.
*/

// Solution-14: Type correction checking with triple equals.

let obj1 = { key: 'value' };
let obj2 = { key: 'value' };
if (obj1 === obj2) {
    console.log("same");
} else {
    console.log("difference"); // Output: difference, because obj1 and obj2 are two different object references in memory, even though they have the same content.
}