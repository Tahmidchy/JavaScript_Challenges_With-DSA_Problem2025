/*
TODO: Problem-14: Create a 'task tracker' function where the count increases by one each time a task is completed; the scope of tasks for you and your friends should remain separate.
*/

// Solution:

function taskTracker() {
    let count = 0;
    return function completeTask() {
        count++;
        console.log(`Tasks completed: ${count}`);
    }
}

// Example usage:
const myTasks = taskTracker();
const friendTasks = taskTracker();

// Completing tasks
myTasks();  
friendTasks();
myTasks();
