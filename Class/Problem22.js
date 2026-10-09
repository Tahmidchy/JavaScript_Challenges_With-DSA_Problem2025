/*
TODO: Problem-22: Create a `person` object that has only a `name` property. Now, check if its prototype contains anything; if it does, try using one of the methods found there and see what the output is.
*/

// Solution:

// Step 1: Ekta person object create kora shudhu 'name' property diye
const person = {
  name: "Tahmid"
};

// Step 2: Person object-er prototype check kora
const prototypeOfPerson = Object.getPrototypeOf(person);

console.log("--- Checking Prototype ---");
console.log("Is prototype present?", prototypeOfPerson !== null);

// Prototype-er bhetore thaka shob method/property-er list dekha
const prototypeKeys = Object.getOwnPropertyNames(prototypeOfPerson);
console.log("Methods/Properties found in prototype:", prototypeKeys);

// Step 3: Prototype-e pawa ekta method (যেমন toString) use kora ebong output dekha
if (prototypeKeys.length > 0) {
  console.log("\n--- Executing a Method from Prototype ---");
  
  // Object.prototype.toString() method-ti call kora
  const output = person.toString();
  
  console.log("Output of person.toString():", output);
}