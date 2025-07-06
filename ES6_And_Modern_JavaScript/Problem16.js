/*
TODO: Problem-16: Create an array animals = ["Cat","Dog","Elephant.] and use the template string My favorite animals are Cat, Dog, Elephant.
*/

// Solution:

const animals = ["Cat", "Dog", "Elephant"];
const message = `My favorite animals are ${animals.join(", ")}.`;
console.log(message); // Output: My favorite animals are Cat, Dog, Elephant.