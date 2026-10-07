/*
TODO: Problem-3: Vehicle Create a class; include 'brand', 'model', and 'price' properties within its constructor. Create two instances from this class: a BMW X5 (with the brand set to BMW, the model to X5, and a price of your choice) and a second car (a Tesla Model 3 with a price of 40,000).
*/

//Solution:

class Vehicle {
    constructor(brand, model, price) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }
};

const BMW_X5 = new Vehicle("BMW", "X5", 60000);
console.log(BMW_X5);
const Tesla_Model_3 = new Vehicle("Tesla", "Model 3", 40000);
console.log(Tesla_Model_3);