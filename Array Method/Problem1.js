/*
TODO: Problem-1: A snack shop has various items, the prices of which are as follows [30,45,20,60,10] Now your task is to increase the price of each item by 13 taka. Now write a program and solve the problem with the help of map operators.
*/

// Solution:

const PriceList = [30, 45, 20, 60, 10];
const UpdatedPriceList = PriceList.map(price => price + 13);
console.log(UpdatedPriceList); // Output: [43, 58, 33, 73, 23]
// The map method creates a new array with the results of calling a provided function on every element in the calling array, effectively increasing each price by 13 taka.
// This solution uses the map operator to iterate over each price in the PriceList array and adds 13 to each price, resulting in a new array of updated prices. The original array remains unchanged.
// The output is logged to the console to verify the updated prices.