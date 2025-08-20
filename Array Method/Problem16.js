/*
TODO: Problem-16: Suppose you have created a list of products [{name:'Pen', price: 50},{name:'Book',price:50},{name:'Bag',price:100}]. This time, add up the prices of all the products using reduce.
*/

// Solution: 

const ProductList = [
    {name:'Pen', price: 50},
    {name:'Book', price: 50},
    {name:'Bag', price: 100}
];

const totalProductPrice = ProductList.reduce((accumulator, current) => accumulator + current.price, 0);
console.log("Total price of all products: ", totalProductPrice);