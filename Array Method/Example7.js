/*
TODO: Now we are testing on filter method of Array with sting values
This code is used to demonstrate the use of the filter method on an array with string values.
The filter method creates a new array with all elements that pass the test implemented by the provided function.
*/

// Example-7: filter method of Array with string values

const friends = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
const selectedFriends = friends.filter(friend => friend.length > 3);
console.log(selectedFriends); // ['Alice', 'Charlie', 'David']