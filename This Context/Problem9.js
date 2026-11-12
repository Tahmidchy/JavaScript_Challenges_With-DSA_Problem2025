/*
TODO: Problem-9: Create an object named `employee` that contains `name` and `role` properties. Include a method named `details` within the `employee` object that uses `this.name` and `this.role` to log information to the console. First, call the `details` method from the `employee` object to display the output. Then, create another object named `manager` that also contains `name` and `role` properties. Finally, use the `.apply()` method to allow the `manager` object to utilize the `employee` object's `details` method.
*/

//Solution:

const employee = {
    name: 'John Doe',
    role: 'Software Engineer',
    details: function() {
        console.log(`Employee Name: ${this.name}, Role: ${this.role}`);
    }
};

// Call the details method from the employee object
employee.details(); // Output: Employee Name: John Doe, Role: Software Engineer

const manager = {
    name: 'Jane Smith',
    role: 'Project Manager'
};

// Use .apply() to allow the manager object to utilize the employee object's details method
employee.details.apply(manager); // Output: Employee Name: Jane Smith, Role: Project Manager    

