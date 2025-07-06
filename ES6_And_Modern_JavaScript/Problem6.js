/*
TODO: Problem-6: Create a function that takes the name of your favorite book as an array parameter. If no parameter is passed, it will default to an array containing a value named JS book.
*/

// Solution: 

function favoriteBooks(books = ["JS book"]) {
    return books;
};
// Example usage:
console.log(favoriteBooks(["The Great Gatsby", "1984", "To Kill a Mockingbird"])); // Output: ["The Great Gatsby", "1984", "To Kill a Mockingbird"]
console.log(favoriteBooks()); // Output: ["JS book"] (default value)