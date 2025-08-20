/*
TODO: Example-28: In here we are testing on slice method of array.
*/
// Example-28: Slice Method

const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
// Slicing the array to get a portion of it
const slicedFruits = fruits.slice(1, 4);
console.log('Sliced Fruits:', slicedFruits); // Output: Sliced Fruits: ['Banana', 'Cherry', 'Date']
// This will extract elements from index 1 to index 3 (not including index 4)