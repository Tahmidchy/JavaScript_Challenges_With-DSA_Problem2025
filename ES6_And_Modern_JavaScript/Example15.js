// TODO: Example-15:

const student = {
    name: 'anants',
    age: 20
};

const getName = person => person.name;
const getAge = person => person.age;
const age = getAge(student);
console.log(age); // Output: 20