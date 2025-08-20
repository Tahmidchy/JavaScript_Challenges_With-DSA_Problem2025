/*
TODO: Problem-26: Reverse an array of objects. const users = [{name:'Ali',age:30},{name:'Sara',age:25},{name:'Tariq',age:35}];
*/

//Solution: 

const users = [{name:'Ali',age:30},{name:'Sara',age:25},{name: 'Tariq',age:35}];
// now reverse this object
const reversedUsers = users.slice().reverse();
console.log(reversedUsers); // Output: [{name: 'Tariq', age: 35}, {name: 'Sara', age: 25}, {name: 'Ali', age: 30}]