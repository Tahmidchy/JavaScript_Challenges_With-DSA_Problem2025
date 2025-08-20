/*
TODO: Problem-23: Given an array of names, display each name alphabetically: const names =['Nabila','Zubayer','sarwar','delwar'];
*/

// Solution: 

const names = ['Nabila', 'Zubayer', 'sarwar', 'delwar'];
// Sort the array in ascending order alphabetically
names. sort((a, b) => a.localeCompare(b));
// Display the sorted array
console.log(names);