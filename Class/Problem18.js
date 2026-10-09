/*
TODO: Problem-18:  Work with pets; create separate classes for dogs, cats, and parrots. First, create a parent class and inherit the common features from it.
*/

// Parent Class

class Animal {
    constructor(name,species,origin){
        this.name = name;
        this.species = species;
        this.origin = origin;
    }
}

// Child Class 

class Parrot extends Animal {
    constructor(name,species,origin,color,flying){
        super(name,species,origin);
        this.color = color;
        this.flying = flying;
    }
}

class Dog extends Animal {
    constructor(name,species,origin,color,age){
        super(name,species,origin);
        this.color = color;
        this.age = age;
    }
}

class Cat extends Animal {
    constructor(name,species,origin,color,sex){
        super(name,species,origin);
        this.color = color;
        this.sex = sex;
    }
}

const My_Bird = new Parrot("Parrot","Macaw","Mexico","Golden-Blue",true);
console.log("Our Bird name is :",My_Bird.name);
console.log("Our Bird Species is :",My_Bird.species);
console.log("Our Bird Origin is :", My_Bird.origin);
console.log("Our Bird Color is :",My_Bird.color);
console.log("Our Bird Can Flay ? :",My_Bird.flying);

const My_Dog = new Dog("Tomy","Terriers","South Korea","White","2 years");
console.log("Our Dog name is :",My_Dog.name);
console.log("Our Dog Species is :",My_Dog.species);
console.log("Our Dog Origin is :",My_Dog.origin);
console.log("Our Dog Color is :",My_Dog.color);
console.log("Our Dog age is :",My_Dog.age);

const My_Cat = new Cat("Arian","Bengal-Cat","United Sated","yellowish-brown","Male");
console.log("Our Cat name is :",My_Cat.name);
console.log("Our Cat Species is :",My_Cat.species);
console.log("Our Cat Origin is :",My_Cat.origin);
console.log("Our Cat Color is :",My_Cat.color);
console.log("Our Cat Sex is :",My_Cat.sex);
