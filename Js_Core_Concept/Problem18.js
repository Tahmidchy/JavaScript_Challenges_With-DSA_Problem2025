/*
TODO: Problem-18: Compare null and undefined with triple equals and check the output. Is it true?
*/

// Solution: checking strict equality between null and undefined

let value1 = null;
let value2 = undefined;
if (value1 === value2) {
    console.log("null and undefined are strictly equal.");
} else {
    console.log("null and undefined are not strictly equal.");
}