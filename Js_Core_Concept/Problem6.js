/*
TODO: Problem-6: [10,20,30,40,50] Then delete the 2 index elements (which have 30) from it, then go to that index and see what kind of output comes out.
*/

// Solution: Problem-6: Deleting an Element from an Array

let numbers = [10, 20, 30, 40, 50]; // Initial array
delete numbers[2]; // Deleting the element at index 2 (which is 30)
console.log(numbers); // Output: [ 10, 20, <1 empty item>, 40, 50 ]
console.log(numbers[2]); // Output: undefined
// Note: Using the delete operator removes the element but does not change the length of the array. The index remains, but it is now empty (undefined). If you want to remove the element and also update the indices, you can use the splice method instead: 