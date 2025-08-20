/*
TODO: Example-29: In here we are testing on Slice method of array with negative indices.
*/
// Example-29: Slice Method with Negative Indices
const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
// Slicing the array using negative indices to get the last few elements
const slicedFruitsNegative = fruits.slice(-3);
console.log('Sliced Fruits with Negative Indices:', slicedFruitsNegative); // Output: Sliced Fruits with Negative Indices: ['Cherry', 'Date', 'Elderberry']
// This will extract the last 3 elements of the array