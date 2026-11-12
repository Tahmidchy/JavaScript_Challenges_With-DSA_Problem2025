/*
TODO: Problem-6: Create an object named `manager` that contains a method called `assignWork`. Inside this `assignWork` method, add the name of a new task to a property named `managerTasks` (which should be an array). Verify the output of this code, and add a comment above the method explaining what the keyword `this` refers to within that context.
*/

// Solution:

const manager = {
    managerTasks: [],
    // Inside this method, 'this' refers to the 'manager' object itself. 
    assignWork(task) {
        this.managerTasks.push(task);
    }
}

manager.assignWork('Prepare report');
console.log(manager.managerTasks); // Output: ['Prepare report'] - 'this' refers to the 'manager' object, so the task is added to the managerTasks array.