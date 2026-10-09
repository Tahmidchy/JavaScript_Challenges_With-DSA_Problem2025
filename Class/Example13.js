/*
TODO: Example-13: Now we are testing inheritance 
*/

// Example-13:

// Parents Class
class Vehicle {
    constructor(brand,model,fuelType){
        this.brand = brand;
        this.model = model;
        this.fuelType = fuelType;
    }
}

// Child Class 

class Bus extends Vehicle {
    constructor(brand,model,fuelType,capacity){
        super(brand,model,fuelType);
        this.capacity = capacity;
    }
}


const cityBus = new Bus("Volvo","B11R","Diesel",50);
const proto1 = Object.getPrototypeOf(cityBus);
console.log(proto1);
const proto2 = cityBus.__proto__;
console.log(proto2);