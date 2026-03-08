/*
TODO: Now we are testing on Nested JSON 
*/

// Solution:

const data = '{"user": {"name": "Tahmid", "status": "Busy"}}';
const parsed = JSON.parse(data);
console.log(parsed.user.name); // output: Tahmid