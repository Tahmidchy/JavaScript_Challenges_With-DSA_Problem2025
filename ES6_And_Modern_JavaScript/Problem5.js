/*
TODO: Problem-5: Write a function that takes the name of a product and its price. If the name is not given, then set it to "Unknown Product" and if the price is not given, then set it to 1.
*/
// Solution: 

function productDetails(name = "Unknown Product", price = 1) {
    return { name, price };
};
// Test the function
console.log(productDetails("Product A", 10)); // Output: { name: 'Product A', price: 10 }
console.log(productDetails("Product B")); // Output: { name: 'Product B', price: 1 }
console.log(productDetails()); // Output: { name: 'Unknown Product', price: 1 }
console.log(productDetails("Product C", 0)); // Output: { name: 'Product C', price: 0 }
