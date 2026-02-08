/*
TODO: Problem-22: এইবার প্রজেক্ট management system বানা , যেখানে অনেকগুলো প্রজেক্ট থাকবে একটা এরে মধ্যে ,প্ৰত্যেকটা প্রজেক্ট এর মধ্যে প্রজেক্ট নাম ,প্রজেক্ট ডেসক্রিপশন , টীম মেম্বার্স ,(এরে),deadlines এবং টাস্কস , প্রতিটা টাস্ক এ টাইটেল ,assignee এবং স্ট্যাটাস থাকবে।  জেসন.Stringify দিয়ে কনভার্ট কর 
*/

// Solution-22:

const projectManagementSystem = {
    project_Description: 'A project management system to manage multiple projects and tasks.',
    Team_Members: ['Alice', 'Bob', 'Charlie'],
    Deadlines: ['2024-07-01', '2024-08-01', '2024-09-01'],
    Tasks : {
        title: 'Design the user interface',
        assignee: 'Alice',
        status: 'In Progress'
    },
    
}
const projectManagementSystemJSON = JSON.stringify(projectManagementSystem);
console.log(projectManagementSystemJSON);