/*
TODO: Example-34: In here we are testing on splice method of array to add elements at a specific index, without removing elements.
*/

// Example-34: Splice Method to Add Elements at a Specific Index Without Removing Elements
const colors = ['Red', 'Green', 'Blue', 'Yellow'];
// Using splice to add elements at index 2 without removing any elements
const addedColors = colors.splice(3, 0, 'Purple', 'Orange');
console.log('Added Colors:', addedColors); // Output: Added Colors: []
console.log('Updated Colors:', colors); // Output: Updated Colors: ['Red', 'Green', 'Purple', 'Orange', 'Blue', 'Yellow']
// This will add 'Purple' and 'Orange' at index 2 without removing any existing elements from the array. The second parameter (4) indicates that no elements should be removed, as it exceeds the number of elements available to remove from that index.