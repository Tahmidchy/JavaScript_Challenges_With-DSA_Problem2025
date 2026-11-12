/*
TODO: Example-12: Now we are testing apply method in Javascript.
*/

// Solution:

const tina = {
    name: 'Tina',
    Salary: 20000,
    getInfo() {
        console.log(`Name: ${this.name}, Salary: ${this.Salary}`);
    }
};


const Dina = {
    name: 'Dina',
    Salary: 30000
}

tina.getInfo.apply(Dina); // Output: Name: Dina, Salary: 30000 - this refers to the Dina object