/*
    TODO: Problem-20: Arrange the array from smallest to largest. const numbers = [50,12,25,8,15]
*/

// Solution: Sort the array in ascending order using the sort() method

const numbers = [50,12,25,8,15];
// Use the sort() method to sort the array in ascending order
numbers.sort((a, b) => a - b);
console.log(numbers); // Output: [8, 12, 15, 25, 50]