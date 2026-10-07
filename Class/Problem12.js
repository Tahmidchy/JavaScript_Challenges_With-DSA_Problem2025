/*
TODO: Problem-12: Now, write a `shoppingCart` class that includes two properties: `products` and `totalPrice`. When an object is created from this class, `products` should be an empty array and `totalPrice` should be 0. Next, create a method named `addToCart` that requires two parameters: the product name and the product price. Calling this method should add the product name to the `products` array and add the product price to the existing value of `totalPrice`. Finally, write a method named `getTotalPrice` that returns the `totalPrice`.
*/

// Solution:

class ShoppingCart {
    constructor( products, totalPrice) {
        this.products = [];
        this.totalPrice = 0;
    }
    
    addToCart(productName, productPrice) {
        this.products.push(productName);
        this.totalPrice += productPrice;
    }

    getTotalPrice() {
        return this.totalPrice;
    }
};

const myCart = new ShoppingCart();
myCart.addToCart("Laptop", 1000);
myCart.addToCart("Mouse", 50);
myCart.addToCart("Keyboard", 80);

console.log("Total Price:", myCart.getTotalPrice()); // Output: 1130