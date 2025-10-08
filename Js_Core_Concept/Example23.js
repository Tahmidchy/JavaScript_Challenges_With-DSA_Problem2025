/*
TODO: Example-23: Now we are testing call back function with map,filter,find.
*/

// Solution: Now we are testing on call back function with map  

const numbers = [1, 2, 3, 4, 5];

// Using map with a callback function to double each number
const doubled = numbers.map(function(num) {
    return num * 2;
});

console.log("Doubled Numbers:", doubled); // Doubled Numbers: [2, 4, 6, 8, 10]

// Solution: Now we are testing on call back function with filter

const ages = [12, 17, 22, 30, 15, 18];
// Using filter with a callback function to get ages 18 and above
const adults = ages.filter(function(age) {
    return age >= 18;
});
console.log("Adults:", adults); // Adults: [22, 30, 18]

// Solution: Now we are testing on call back function with find
const people = [
    {name: "Alice", age: 25},
    {name: "Bob", age: 17},
    {name: "Charlie", age: 30}
];
// Using find with a callback function to get the first person older than 18
const firstAdult = people.find(function(person) {
    return person.age > 18;
});
console.log("First Adult:", firstAdult); // First Adult: {name: "Alice", age: 25}
// Note: In all the above examples, we are using callback functions with array methods like map, filter, and find.