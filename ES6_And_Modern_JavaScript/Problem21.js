/*
TODO: Problem-21: An object has two properties, the name and the amount of money in the pocket. Now write an arrow function that divides the amount of money by 5 and returns the quotient.
*/

// Solution: 

const divideMoney = (person) => person.amount / 5; // Arrow function to divide the amount of money by 5
// Example usage:
const person = {
    name: "John",
    amount: 100
};
const result = divideMoney(person);
console.log(`${person.name} can spend: $${result}`); // Output: John can spend: $20