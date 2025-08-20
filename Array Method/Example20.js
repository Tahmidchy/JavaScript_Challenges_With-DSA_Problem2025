/*
TODO: Example-20: In here we are testing on JavaScript Reduce() method with objects.
*/
// Example-20:

const products = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 },
    { name: "Tablet", price: 300 },
    { name: "Monitor", price: 200 },
    { name: "Keyboard", price: 100 },
    { name: "Mouse", price: 50 },
];
const names = products.map(product => product.name);
console.log(names);

