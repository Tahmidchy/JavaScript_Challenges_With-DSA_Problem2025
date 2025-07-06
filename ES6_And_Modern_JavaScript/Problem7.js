/*
TODO: Problem-7: Create a function that takes an object as a parameter. The object will contain the price and quantity of the price object, if no object is sent, set the price to 10 and the quantity to 1 as default values. The function will return the total price.
*/

// Solution:

function calculateTotalPrice({ price = 10, quantity = 1 } = {}) {
    return price * quantity;
};
// Example usage:
console.log(calculateTotalPrice({ price: 5, quantity: 2 })); // Output: 10 (5 * 2)
console.log(calculateTotalPrice({ price: 20 })); // Output: 20 (20 * 1)
console.log(calculateTotalPrice({})); // Output: 10 (10 * 1)