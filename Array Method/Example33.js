/*
TODO: Example-33: In here we are testing on splice method of array to add elements at a specific index, with removing elements.
*/

// Example-33: Splice Method to Add Elements at a Specific Index
const numbers = [1,2,3,4,5,6,7,8,9,10];
// Using splice to add elements at index 3 and remove 2 elements
const deleted = numbers.splice(3,3,99,100);
console.log('Deleted Elements:', deleted); // Output: Deleted Elements: [4, 5, 6]
console.log('Updated Numbers:', numbers); // Output: Updated Numbers: [1, 2, 3, 99, 100, 7, 8, 9, 10]
// This will remove elements at index 3 and add 99 and 100 in their place .