/*
TODO: Problem-29: An array named movielist contains Inception, Titanic, Joker, Avatar, Interstellar. Use splash to remove Joker and Avatar and add Batman and Superman in their place.
*/

// Solution: 

const movielist = ["Inception", "Titanic", "Joker", "Avatar", "Interstellar"];
// Now we will use the splice method to remove Joker and Avatar and add Batman and Superman in their place.

const updateMovileList = movielist.splice(1, 2, "Batman", "Superman");
console.log(updateMovileList); // Output: ["Batman", "Superman"]
console.log(movielist); // Output: ["Inception", "Titanic", "Batman  ", "Superman", "Interstellar"]