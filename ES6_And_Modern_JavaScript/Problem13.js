/*
TODO: Problem-13: Create an array called fruits, use the template string and see what your third favorite fruit is.
*/

// Solution: 
function favoriteFruit(fruits) {
    if (fruits.length < 3) {
        return "Not enough fruits in the array.";
    }
    return `My third favorite fruit is ${fruits[2]}.`;
};

// Example usage:
const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
console.log(favoriteFruit(fruits)); // Output: My third favorite fruit is Cherry.