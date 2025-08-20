/*
TODO: Problem-9: ['Cow','Goat','Sheep','Horse'] Print each name from this array to the console using forEach.

*/

// Solution:

const AnimalArray = ['Cow', 'Goat', 'Sheep', 'Horse'];
AnimalArray.forEach(animal => console.log(animal));
// The forEach method executes a provided function once for each array element, effectively iterating through the AnimalArray and printing each animal name to the console.
// This solution uses the forEach operator to iterate over each animal in the AnimalArray and logs it to the console. The original array remains unchanged.
// The output is printed directly to the console, showing each animal name from the array on a new line.
// The forEach method does not return a new array; it simply performs the action of logging each animal name to the console.
// This solution demonstrates how to use the forEach method to perform an action on each element of an array without creating a new array.