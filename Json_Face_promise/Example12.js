/*
TODO: Example-12: JSON Face Promise object 
*/

const shop = {
    owner: 'John Doe',
    address:{
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
    },
    products: ['Laptop', 'Phone', 'Tablet'],
    revenue: 1000000,
    isOpen: true,
    isNew: false,
};
const shopJSON = JSON.stringify(shop); // Convert the shop object to a JSON string
console.log(shopJSON); // Output the JSON string to the console