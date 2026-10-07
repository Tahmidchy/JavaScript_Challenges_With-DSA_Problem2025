/*
TODO: Problem-4: Create a class named `Worker` with properties `id`, `name`, and `hoursWorked`, then create a new worker with ID 101, name "TOM Cruise", and `hoursWorked` set to 40.
*/
//Solution:

class Worker {
    constructor(id, name, hoursWorked) {
        this.id = id;
        this.name = name;
        this.hoursWorked = hoursWorked;
    }
};

const worker1 = new Worker(101, "TOM Cruise", 40);
console.log(worker1);