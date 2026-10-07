/*
TODO: Optional Chaining and Nullish Coalescing Operator (??)
*/

const postalCode = user.address?.postalCode ?? "Postal code not available"; // If user.address is null or undefined, postalCode will be "Postal code not available"
console.log(postalCode); // Output: Postal code not available