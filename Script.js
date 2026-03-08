/*
TODO: Challenge-5: Gemini challenge 'C' create data 
*/

// Solution:
let myTask = [];
function addTask(taskName,priority) {
    let task = {
        id: Date.now(), // Unique ID Generate
        title: taskName,
        priority: priority, // example: high, medium,low
        status: "pending"
    };
    myTask.push(task);
    console.log(`"${taskName}" Add your list`);
}

// Now adding Some task

addTask("Dulingo Lesson","High");
addTask("JS CRUD Practice","High");
addTask("Tea Break with Mom","Medium");
console.log(myTask);