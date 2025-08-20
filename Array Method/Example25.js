/*
TODO: Example-25: In here we are testing on sort method of the objects in an array.
*/

//Example-25: Sort Method with Objects in an Array

const friends = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Jim', age: 20 },
    { name: 'Jill', age: 28 },
    { name: 'Joe', age: 22 }
];
// Sorting the array of objects by age in ascending order
const sortedFriendsByAge = friends.sort((a, b) => a.age - b.age);
console.log('Sorted Friends by Age:', sortedFriendsByAge);