/*
TODO: Problem-7: Product Create a class named 'Product' with 'name', 'category', and 'stock' in its constructor; then, create a new product named 'Mobile' with the category 'Electronics' and a stock of 50.
*/

//Solution:

class Product {
    constructor(name, category, stock) {
        this.name = name;
        this.category = category;
        this.stock = stock;
    }
};

const mobileProduct = new Product("Mobile", "Electronics", 50);
console.log(mobileProduct);