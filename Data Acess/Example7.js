/*
TODO: Example-7: Optional Chaining and Nullish Coalescing Operator (??)
*/

const user = {
    name: 'John',
    address: {
        city: 'New York',
        zip: '10001'
    }
};
const city = user.address?.city ?? "City not available"; // If user.address is null or undefined, city will be "City not available "
console.log(city); // Output: New York