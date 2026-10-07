/*
TODO: Problem-2: Write a program where. const library={name:'city library',books:[{id:1,title:'JavaScript Basics',price:300},{id:2,title:'Python Essentials',price:500}]} Now, extract the price of the second book from the 'books' array.
*/

const library = {
    name: 'city library',
    books: [
        {id: 1, title: 'JavaScript Basics', price: 300},
        {id: 2, title: 'Python Essentials', price: 500}
    ]
};

console.log(library.books[1].price);