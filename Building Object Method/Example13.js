/*
TODO: Example-13: Now we are testing on Map Set Object Methods.
*/

//Now we are testing on Map set object methods.

const mySet = new Set([1,2,3,4,5]);
console.log("Initial Set:", mySet);

// Adding a new element to the Set
mySet.add(6);
console.log("Set after adding 6:", mySet);

// Trying to add a duplicate element to the Set
mySet.add(3);
console.log("Set after trying to add duplicate 3:", mySet); // Set remains unchanged
// Checking if an element exists in the Set
console.log("Set has 4:", mySet.has(4));
// Removing an element from the Set
mySet.delete(2);
console.log("Set after deleting 2:", mySet);
// Getting the size of the Set
console.log("Size of the Set:", mySet.size);
// Iterating over the Set
console.log("Iterating over Set elements:");
for (let item of mySet) {
    console.log(item);
}
// Clearing all elements from the Set
mySet.clear();
console.log("Set after clearing all elements:", mySet); // Outputs: Set(0) {}

