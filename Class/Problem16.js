/*
TODO: Problem-16: Think about 'Animal', 'Bird', and 'Fish'. Try defining at least five properties for each. Identify the common ones and place them in a parent class, while keeping the unique ones in the child classes. Finally, create objects from all these classes and verify that the properties are working correctly.
*/

// Solution:

// Parent class 

class Animal {
    constructor(name,species,origin){
        this.name = name;
        this.species = species;
        this.origin = origin;
    }
}

// Child class : Bird 

class Bird extends Animal {
    constructor(name,species,origin,color,flying){
        super(name,species,origin);
        this.color = color;
        this.flying = flying;
    }
}

class Fish extends Animal {
    constructor(name,species,origin,color,swim){
        super(name,species,origin);
        this.color = color;
        this.swim = swim;
    }
}

const My_Bird = new Bird("Parrot","Macaw","Mexico","Golden-Blue",true);
console.log("Our Bird name is :",My_Bird.name);
console.log("Our Bird Species is :",My_Bird.species);
console.log("Our Bird Origin is :", My_Bird.origin);
console.log("Our Bird Color is :",My_Bird.color);
console.log("Our Bird Can Flay ? :",My_Bird.flying);

const My_Fish = new Fish("Gold Fish","Comet Gold","China","Red Orange",true);
console.log("Our Bird name is :",My_Fish.name);
console.log("Our Bird Species is :",My_Fish.species);
console.log("Our Bird Origin is :", My_Fish.origin);
console.log("Our Bird Color is :",My_Fish.color);
console.log("Our Bird Can Flay ? :",My_Fish.swim);


 