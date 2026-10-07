/*
TODO: Problem-15: Consider various types of vehicles—such as buses, trucks, and bikes. First, add at least five properties for each of them based on your own reasoning. Next, identify which properties are shared (common) and which are unique (uncommon). Then, create a parent class using the common properties. After that, establish a relationship by extending the parent class to create child classes. Finally, create objects from these child classes to verify whether you can access both the common and unique properties.
*/

//Solution: 

// Parents class 

class  Vehicles {
    constructor(brand, model, price) {
        this.brand = brand;
        this.model = model;
        this.price = price;

    }
}

// Child Class

class Bus extends Vehicles {
    constructor(brand,model,price, Electric_motor){
        super(brand,model,price);
        this.Electric_motor = Electric_motor;
    }
}

const My_Bus = new Bus("BYD","B12","$450000",true);
console.log("Our Bus Brand Name is :",My_Bus.brand);
console.log("Our Bus Model is :",My_Bus.model);
console.log("Our Bus Price is :",My_Bus.price);
console.log("Our Bus Has Electric Motors ? :",My_Bus.Electric_motor);

// Child Class

class Truck extends Vehicles {
    constructor(brand,model,price, v6_Engine){
        super(brand,model,price);
        this.v6_Engine = v6_Engine;

    }
}

const My_Truck = new Truck("Hino","Hino-700 Series","$8500",false);
console.log("Our Track Brand is :",My_Truck.brand);
console.log("Our Truck Model is :",My_Truck.model);
console.log("Our Truck Price is :",My_Truck.price);
console.log("Our Truck has V6 Engine ? :",My_Truck.v6_Engine);

//Child class 

class Bike  extends Vehicles {
    constructor(brand,model,price,sports_bike){
        super(brand,model,price);
        this.sports_bike = sports_bike;
    }
}
const My_Bike = new Bike("Honda","Honda CBR150R","BDT:655000",true);
console.log("My Bike Brand is :",My_Bike.brand);
console.log("My_Bike Model is :", My_Bike.model);
console.log("My Bike Price is :", My_Bike.price);
console.log("My Bike is Sports ? :",My_Bike.sports_bike);