/*
TODO: Problem-13: Create a new date object and set 2035,6,15,14,45,30 in it. Then show the console.
*/

// Create a new Date object
const specificDate = new Date();
specificDate.setFullYear(2035);
specificDate.setMonth(6); // July (0-11)
specificDate.setDate(15);
specificDate.setHours(14);
specificDate.setMinutes(45);
specificDate.setSeconds(30);
console.log("Specific Date and Time:", specificDate); // Outputs the specific date and time