/*
TODO: Problem-8: const student = {name:"serious sojib", roll: 1, masks:99}; How much marks did you get from this object for the student? Why do you get that?
*/

// Solution-8: 
const student = {name:"serious sojib", roll: 1, marks:99};
console.log(student.masks); //Output: undefined, because there is no property named 'masks' in the student object. The correct property name is 'marks'. 
//If you want to get the marks, you should use student.marks which will give you 99. 
console.log(student.marks); //Output: 99
//So, you get undefined when you try to access a property that does not exist in the object. 