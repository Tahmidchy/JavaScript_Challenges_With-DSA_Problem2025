/*
TODO: Problem-20: Remove all duplicate value from an array and create a new set of unique values. [1,2,2,3,4,4,5] => [1,2,3,4,5]
*/
// Given array with duplicate values
const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
// Creating a Set from the array to remove duplicates
const uniqueSet = new Set(arrayWithDuplicates);
// Converting the Set back to an array (if needed)
const uniqueArray = Array.from(uniqueSet);
console.log("Array with duplicates:", arrayWithDuplicates);
console.log("Set of unique values:", uniqueSet);
console.log("Array of unique values:", uniqueArray);