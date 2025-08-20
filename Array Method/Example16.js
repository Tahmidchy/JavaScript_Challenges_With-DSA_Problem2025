/*
TODO: Now we are testing on flat() Method of Array
This method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
*/

// Example-16:

const nestedArray = [1, [2, [3, 4]], 5];
const flattenedArray = nestedArray.flat(2);
console.log(flattenedArray); // Output: [1, 2, [3, 4], 5]
// Explanation: The flat() method is used here to flatten the nested array up to a depth of 2.
// The result is a new array where the elements of the sub-arrays are concatenated into the main array,
// but the inner sub-array [3, 4] remains intact because we specified a depth of 2.
// If we had used flat(1), the output would have been [1, 2, 3, 4, 5].
// If we had used flat(1), the output would have been [1, 2, 3, 4, 5].