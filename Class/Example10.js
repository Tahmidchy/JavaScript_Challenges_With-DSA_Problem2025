/*
TODO: We are testing parent class and child class in the class and how to use it.
*/
class Gadget {
    constructor(brand,model,price) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }
};
class phone extends Gadget {
    constructor(brand,model,price,hasFaceUnlock,cameraCount) {
        super(brand,model,price);
        this.hasFaceUnlock = hasFaceUnlock;
        this.cameraCount = cameraCount;
    }
}

const myPhone = new phone("Apple","iPhone 13",999,true,2);
console.log("Phone Brand:", myPhone.brand);
console.log("Phone Model:", myPhone.model);