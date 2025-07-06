/*
TODO: Problem-22: To get the last element of an array in JavaScript, you need to find the index of the last element. The way to find the index of the last element is to find the array length and subtract 1 from it. Practice this a little first, then create an arrow function that adds the first and last elements of an array and returns the sum.
*/

// Solution: 

const sumFirstAndLast = (arr) => {
    return arr[0] + arr[arr.length - 1];
};
// Example usage:
console.log(sumFirstAndLast([1, 2, 3, 4, 5])); // Output: 6
console.log(sumFirstAndLast([10, 20, 30, 40]));