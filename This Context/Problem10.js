/*
TODO: Problem-10: Create an object named `classroom` that contains a `name` property and a `students` property (which should hold a list of student names). Include a method named `attendance` within the `classroom` object; this method should combine `this.name` and the names from `this.students` into a single string (joined by commas) and log it to the console. First, call the `attendance` method from the `classroom` object to see the output. Then, create another object named `lab` that also contains `name` and `students` properties. Finally, use `.bind()` to bind the `classroom` object's `attendance` method to the `lab` object.
*/

// Solution:

const classroom = {
  name: 'Math Class',
  students: ['Alice', 'Bob', 'Charlie'],
    attendance: function() {
    const studentList = this.students.join(', ');
    console.log(`Classroom: ${this.name}, Students: ${studentList}`);
  }
};

// Call the attendance method from the classroom object
classroom.attendance(); // Output: Classroom: Math Class, Students: Alice, Bob, Charlie

const lab = {
  name: 'Science Lab',
  students: ['David', 'Eva', 'Frank']
};

// Use .bind() to bind the classroom object's attendance method to the lab object
const boundAttendance = classroom.attendance.bind(lab);
boundAttendance(); // Output: Classroom: Science Lab, Students: David, Eva, Frank