/*
TODO: Problem-3: Create a function that takes a name and monthly income. If a name is not given, it will default to Anonymous, and if a monthly income is not given, it will default to 0.
*/

// Solution: 

function createProfile(name = "Anonymous", monthlyIncome = 0) {
    return `Name: ${name}, Monthly Income: ${monthlyIncome} Taka`;
};
// Example usage:
console.log(createProfile("John Doe", 50000)); // Output: Name: John Doe, Monthly Income: 50000 Taka
console.log(createProfile("Jane Smith")); // Output: Name: Jane Smith, Monthly Income: 0 Taka
console.log(createProfile()); // Output: Name: Anonymous, Monthly Income: 0 Taka