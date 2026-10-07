/*
TODO: Problem-11: Create a class named `Library` with a property called `books`, initialized as an empty array. Next, write a method named `addBook` that takes a book's name as a parameter and adds it to the `books` property. Then, create another method named `hasBook` that takes a book's name as a parameter; this method should check if the specified book exists in the `books` property—returning `true` if it does, and `false` otherwise.
*/

// Solution:

class Library {
    constructor() {
        this.books = [];
    }
    addBook(bookName) {
        this.books.push(bookName);
    }
    hasBook(bookName) {
        if (this.books.includes(bookName) == true) {
            return true;
        } else {
            return false;
        }
        
    }
};

const myLibrary = new Library();
myLibrary.addBook("The Great Gatsby");
myLibrary.addBook("To Kill a Mockingbird");

console.log("Has 'The Great Gatsby':", myLibrary.hasBook("The Great Gatsby")); // Output: true
console.log("Has '1984':", myLibrary.hasBook("1984")); // Output: false