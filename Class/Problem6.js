/*
TODO: Problem-6: Classroom Create a class that has a property named `students` (initialized as an empty array) and includes `section` and `teacher` properties within the constructor; then, create an instance of this class where the section is 'A' and the teacher is 'Mr. Plumber'.
*/
//Solution:

class Classroom {
    constructor(section, teacher) {
        this.students = [];
        this.section = section;
        this.teacher = teacher;
    }
}

const classroom1 = new Classroom('A', 'Mr. Plumber');
console.log(classroom1);