/*
TODO: Problem-5: You have some numbers: [7,10,15,20,25,30] , you want to find out what each number is when divided by 3, one by one. Write a program using map.
*/

// Solution: 

const Numbers = [7, 10, 15, 20, 25, 30];
const DividedBy3 = Numbers.map(number => number / 3);
console.log(DividedBy3); // Output: [2.333333333333333, 3.3333333333333335, 5, 6.666666666666667, 8.333333333333334, 10]
// The map method creates a new array populated with the results of calling a provided function on every element in the calling array, effectively transforming each number by dividing it by 3.
// This solution uses the map operator to iterate over each number in the Numbers array and applies the division by 3, resulting in a new array of the results. The original array remains unchanged.
// The output is logged to the console to verify the results of the division.