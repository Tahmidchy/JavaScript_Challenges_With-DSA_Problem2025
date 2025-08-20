/*
TODO: Problem-2: Suppose you have a list of names, the list is ['Messi','Maradona','Pele','Zidane','Ronaldo','Neymar' ], now you want to write a program that will separate the names of people whose names have more than 5 characters from this list and solve the problem by using a filter operation.
*/

// Solution:

const NameList = ['Messi', 'Maradona', 'Pele', 'Zidane', 'Ronaldo', 'Neymar'];
const LongNames = NameList.filter(name => name.length > 5);
console.log(LongNames); // Output: ['Maradona', 'Zidane', 'Ronaldo', 'Neymar']
// The filter method creates a new array with all elements that pass the test implemented by the provided function, effectively filtering out names with 5 or fewer characters.
// This solution uses the filter operator to iterate over each name in the NameList array and checks if the length of each name is greater than 5 characters, resulting in a new array of names that meet this condition. The original array remains unchanged.