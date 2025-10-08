/*
TODO: Problem-15: Create an array, then keep another variable as a reference to that array, this time check with triple equals, are the two equal?
*/

// Solution: checking reference equality with triple equals

let originalArray = [1, 2, 3];
let referenceArray = originalArray;

if (originalArray === referenceArray) {
    console.log("The two arrays are equal (reference equality).");
} else {
    console.log("The two arrays are not equal.");
}