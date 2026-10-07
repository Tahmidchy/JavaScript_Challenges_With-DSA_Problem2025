/*
TODO: Problem-16: Use getDay to find the day of the week and the name of the day on 2029-02-16.
*/

// Create a new Date object for February 16, 2029

const specificDate = new Date('2029-02-16');
const dayIndex = specificDate.getDay();
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const dayName = daysOfWeek[dayIndex];
console.log("Day Index on 2029-02-16:", dayIndex); // Outputs the day index (0-6)
console.log("Day Name on 2029-02-16:", dayName); // Outputs the name of the day (e.g., 'Friday')
// / --- IGNORE --- 