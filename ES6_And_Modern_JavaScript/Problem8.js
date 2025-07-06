/*
TODO: Problem-8: Create a function that takes an array parameter, multiplies each element by 2, and returns a new array. If an array is not given, set it to [5,10,15] as the default.
*/
// Solution: 

function multiplyArrayElements(arr = [5, 10, 15]) {
    return arr.map(element => element * 2);
};
// Example usage:
console.log(multiplyArrayElements([1, 2, 3])); // Output: [2, 4, 6]
console.log(multiplyArrayElements()); // Output: [10, 20, 30]