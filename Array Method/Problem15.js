/*
TODO: Problem-15: You are the owner of a store. Find the total price of all your products [{name:'Shampoo', price:100},{name:'Shop',price:50},{name:'toothpaste',price:75}] using reduce.
*/

// Solution:

const Products = [
    {name:'Shampoo', price:100},
    {name:'Shop', price:50},
    {name:'toothpaste', price:75}
];
const totalPrice = Products.reduce((accumulator, current) => accumulator + current.price, 0);
console.log("Total price of all products: ", totalPrice);