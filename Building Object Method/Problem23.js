/*
TODO: Problem-23: Create a set with the elements [1,2,3,4,2,1,5,5] in the array, and convert that set to an array.
*/

// Given array with duplicate values
const arrayWithDuplicates = [1, 2, 3, 4, 2, 1, 5, 5];
// Creating a Set from the array to remove duplicates
const uniqueSet = new Set(arrayWithDuplicates);
// Converting the Set back to an array
const uniqueArray = Array.from(uniqueSet);
console.log("Array with duplicates:", arrayWithDuplicates);
console.log("Set of unique values:", uniqueSet);
console.log("Array of unique values:", uniqueArray);