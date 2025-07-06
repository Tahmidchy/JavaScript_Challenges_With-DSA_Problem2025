/*
TODO: Problem-18: Write an array function that returns the value of the first index of an array.
*/

// Solution: 

const getFirstIndexValue = (arr) => {
    return arr.length > 0 ? arr[0] : undefined; // Return the first index value or undefined if the array is empty
};
// Example usage:
const numbers = [10, 20, 30, 40];
const firstValue = getFirstIndexValue(numbers);
console.log("The First Value is:", firstValue); // Output: The First Value is : 10