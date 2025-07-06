/*
TODO: Problem-15:  const Person = { firstName: "Amit",lastName: "Hasan"}; Show full name using template string: Amit Hasan.
*/

// Solution:
const Person = { firstName: "Amit", lastName: "Hasan" };
function getFullName(person){
    return `${person.firstName} ${person.lastName}`;
};
// Example usage:
console.log(getFullName(Person)); // Output: Amit Hasan.