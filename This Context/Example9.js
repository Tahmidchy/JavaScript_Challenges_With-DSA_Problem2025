/*
TODO: Example-9: Now we are testing getThis() method in Javascript.
*/

// Solution: 

const student = {
    name: 'Learner',
    getThis() {
        console.log(this);
    }
}
student.getThis(); // Output: { name: 'Learner', getThis: [Function: getThis] } - this refers to the student object