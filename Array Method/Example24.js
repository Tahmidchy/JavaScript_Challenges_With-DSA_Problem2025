/*
TODO: Example-24: In here we are testing on sort method of array but in this case we are watching in here little bit problem with sorting numbers. than we are check how to solve this problem.
*/

//Example-24: Sort Method with Numbers (Handling Numeric Sorting) [ In here we are see the problem with sorting numbers ]

const numbers = [30, 5, 100, 1, 20];
// Sorting the array in ascending order
numbers.sort();
console.log('Sorted Numbers incorrect way:', numbers); // Output: Sorted Numbers: [1, 100, 20, 30, 5]

// The output is incorrect because sort() converts numbers to strings and sorts them lexicographically.
// To fix this, we can use the localeCompare() method or provide a compare function to the sort method.
// To sort numbers correctly, we need to provide a compare function
const sortedNumbers = numbers.sort((a, b) => a - b);
console.log('Correctly Sorted Numbers:', sortedNumbers); // Output: Correctly Sorted Numbers: [1, 5, 20, 30, 100]
