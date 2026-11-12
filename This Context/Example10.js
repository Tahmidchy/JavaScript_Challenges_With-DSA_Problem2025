/*
TODO: Example-10: Now we are testing this with bind call.
*/

// Solution:

const student = {
    name: 'Learner'
};

const teacher = {
    name: 'Bambo Donor'
};

const getThis = function() {
    console.log(this);
};

// Using bind to explicitly set the value of 'this'
const boundGetThis = getThis.bind(student);
boundGetThis(); // Output: { name: 'Learner' } - this refers to the student object

const boundGetThisTeacher = getThis.bind(teacher);
boundGetThisTeacher(); // Output: { name: 'Bambo Donor' } - this refers to the teacher object
