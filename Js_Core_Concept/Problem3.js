/*
TODO: Problem-3: Create an object named Language with two properties: name and age. Name will be JS and age will be 30. Set the object to a new variable called newVersion in Language. Then add a new property called newVersion with the key being location and the value being browser. Use the console log to see the values ​​of Person and NewPerson.
*/

// Problem-3: Non-Primitive Types with Addition

let language = {name: "JS", age: 30}; // Initial object
let newVersion = language; // Copying the reference of language to newVersion
newVersion.location = "browser"; // Adding a new property to newVersion
console.log("Value of language:", language); // Output: Value of language: { name: 'JS', age: 30, location: 'browser' }
console.log("Value of newVersion:", newVersion); // Output: Value of newVersion: { name: 'JS', age: 30, location: 'browser' }
// language is modified because objects are passed by reference and we added a new property through newVersion 