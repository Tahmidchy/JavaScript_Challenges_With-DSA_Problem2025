/*
TODO: Example-3: We are testing the Javascript Class how to work with it.
*/

// Example-3:

class FoodOrder {
    constructor(orderId, customerName, items, price) {
        this.orderId = orderId;
        this.customerName = customerName;
        this.items = items;
        this.price = price;
    }
}

const order1 = new FoodOrder(101, "Alice", ["Pizza", "Coke"], 15.99);
console.log(order1);
const order2 = new FoodOrder(102, "Bob", ["Burger", "Fries"], 12.49);
console.log(order2);
console.log(order1 instanceof FoodOrder); // true
console.log(order2 instanceof FoodOrder); // true
console.log({age: 25} instanceof FoodOrder); // false