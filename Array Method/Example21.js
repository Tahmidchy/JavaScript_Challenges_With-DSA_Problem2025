/*
TODO: Example-21: In here we are testing on JavaScript map() method with objects.
*/

// Example-21:

const products = [
    {id:1, name:'lenovo',price:65000},
    {id:2, name:'dell',price:75000},
    {id:3, name:'hp',price:80000},  
    {id:4, name:'Asus',price:70000},
    {id:5, name:'acer',price:60000},
];

const names = products.map(p => p.name);
console.log("Product names: ", names);

const expensive = products.filter(p => p.price > 70000);
console.log("Expensive products: ", expensive);

const affordable = products.filter(p => p.price <= 70000);
console.log("Affordable products: ", affordable);

const total = products.reduce((accumolator,current) => accumolator + current.price, 0);
console.log("Total price of all products: ", total);