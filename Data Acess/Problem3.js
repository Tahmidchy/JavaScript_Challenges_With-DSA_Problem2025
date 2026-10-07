/*
TODO: Problem-3: You have an object; const school = {name:'Green high school',students:[{id:1,name:'John'},{id:2,name:'Jane'}]}now, write a program to print the name of the first student from the `student` array.
*/

const school = {
    name: 'Green high school',
    students: [
        {id: 1, name: 'John'},
        {id: 2, name: 'Jane'}
    ]
};

console.log(school.students[0].name);
