/*
TODO: Problem-8: Product Create a class where the constructor includes `name`, `category`, and `stock`. Then, create a new product instance named "Mobile" with the category "Electronic" and a stock of 50; if no value is provided for the `stock` property when creating the object, it should default to 0.
*/
//Solution:

class Product {
    constructor(name, category, stock = 0) {
        this.name = name;
        this.category = category;
        this.stock = stock;
    }
}

const mobileProduct = new Product("Mobile", "Electronics", 50);
console.log(mobileProduct);