/*
TODO: Problem-17: Furniture Create a class and then create 'Chair' and 'Table' as its child classes; keep the common properties in the parent class, and then add specific properties and methods for the 'Chair' and 'Table'.
*/

// Solution:

// Parent Class 

class Furniture {
    constructor(brand,set,price){
        this.brand = brand;
        this.set = set;
        this.price = price;

    }
}

// Child Class : Chair

class Chair extends Furniture {
    constructor (brand,set,price,color){
        super(brand,set,price);
        this.color = color;
    }
}

// Child Class : Table

class Table extends Furniture {
    constructor (brand,set,price,material){
        super(brand,set,price);
        this.material = material;
    }
}

const My_Chair = new Chair("HATIL","6 Chair","80 hajar","woden_color");

console.log("My Chair Brand is :",My_Chair.brand);
console.log("My Chair Set is :",My_Chair.set);
console.log("My Chair price is :",My_Chair.price);
console.log("My Chair Color is : ",My_Chair.color);

const My_Table = new Table("HATIL","6 Table","90 hajar","wood");

console.log("My Table Brand is :",My_Table.brand);
console.log("My Table set is :",My_Table.set);
console.log("My Table Price is :",My_Table.price);
console.log("My Table Material is:",My_Table.material);

