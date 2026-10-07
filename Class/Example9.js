/*
TODO: Example-9: Now we are testing  super class and sub class in the class and how to use it.
*/

// Solution:

//Perent class
class Gadget {
    constructor(brand,model,price) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }
};

//Child class
class Laptop extends Gadget {
    constructor(brand,model,price,keyboardLight) {
        super(brand,model,price);
        this.keyboardLight = keyboardLight;
    }
};

const myLaptop = new Laptop("Dell","XPS 15",1500,true);
console.log("Laptop Brand:", myLaptop.brand);
console.log("Laptop Model:", myLaptop.model);
console.log("Laptop Price:", myLaptop.price);
console.log("Keyboard Light:", myLaptop.keyboardLight);