/*
TODO: Problem-21: Write a function that takes an object parameter and displays all the keys of the object to the console through a callback.
*/

// Solution: Function that takes an object and a callback to display its keys

function showObjectKeys(obj, callback) {
    const keys = Object.keys(obj);
    callback(keys);
};
// Callback function to display the keys
function displayKeys(keys) {
    console.log("Object Keys:", keys);
};
// Example object
const person = {
    name: "John",   
    age: 30,
    city: "New York"
};
// Calling the function with the object and the callback
showObjectKeys(person, displayKeys);
// Output: Object Keys: [ 'name', 'age', 'city' ]
