/*
TODO: Problem-3: You have a list of numbers. The list of numbers is [10,15,20,25,30,35] , you write a program that will find the first number that is greater than 20.
*/

// Solution:

const NumberList = [10, 15, 20, 25, 30, 35];
const FirstNumberGreaterThan20 = NumberList.find(number => number > 20);
console.log(FirstNumberGreaterThan20); // Output: 25
// The find method returns the value of the first element in the array that satisfies the provided testing function, effectively finding the first number greater than 20.
// This solution uses the find operator to iterate over each number in the NumberList array and checks if the number is greater than 20, returning the first number that meets this condition. If no such number exists, it returns undefined. The original array remains unchanged.