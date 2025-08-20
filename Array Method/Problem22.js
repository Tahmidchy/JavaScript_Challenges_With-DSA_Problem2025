/*
TODO: Problem-22: Show friends sorted by age const Friends =[{name:'Ali',age:29},{name:'Sara',age:22},{name:'Tariq',age:35}];
*/

//Solution: 

const Friends =[{name:'Ali',age:29},{name:'Sara',age:22},{name:'Tariq',age:35}];
// Sorting the array of objects based on age
const sortedFriends = Friends.sort((a, b) => a.age - b.age);
console.log(sortedFriends); // Output: [{name:'Sara',age:22},{name:' Ali',age:29},{name:'Tariq',age:35}]