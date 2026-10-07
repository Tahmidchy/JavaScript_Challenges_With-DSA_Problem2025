/*
TODO: Example-11: We are testing parent class and child class in the class and how to use it.
*/

// Parent class
class Gadget {
    constructor(brand,model,price){
        this.brand = brand;
        this.model = model;
        this.price = price;
        
    }
}

// Child class
class Tablet extends Gadget {
    constructor(brand,model,price,hasPen){
        super(brand,model,price);
        this.hasPen = hasPen;  
    } 
    }

    const  myTablet = new Tablet("Samsung","Galaxy Tab S8",700,true);
    console.log(myTablet.brand);
    console.log(myTablet.hasPen);
