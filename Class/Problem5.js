/*
TODO: Problem-5: Library Create a class with three properties in its constructor: `name`, `books`, and `location`. Then, create a new library object named "Central Library" with 10,000 books and the location "Dhaka". Finally, use `instanceof` to check whether the object you created is an instance of the library class.
*/

//Solution:

class Library {
    constructor(name, books, location) {
        this.name = name;
        this.books = books;
        this.location = location;
    }
};

const centralLibrary = new Library("Central Library", 10000, "Dhaka");
console.log(centralLibrary);
console.log(centralLibrary instanceof Library); // true