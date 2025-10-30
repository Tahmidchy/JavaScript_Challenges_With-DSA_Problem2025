/*
TODO: Example-11: Now we are going test Date object method.
*/

// Create a new Date object

const now = new Date();
console.log(now); // Outputs the current date and time

// Get the current year
const year = now.getFullYear();
console.log("Current Year:", year); // Outputs the current year

// Get the current month (0-11)
const month = now.getMonth();
console.log("Current Month (0-11):", month); // Outputs the current month (0-11)

// Get the current date
const date = now.getDate();
console.log("Current Date:", date); // Outputs the current date

// Get the current day of the week (0-6)
const day = now.getDay();
console.log("Current Day of the Week (0-6):", day); // Outputs the current day of the week (0-6)

// Get the current hours
const hours = now.getHours();
console.log("Current Hours:", hours); // Outputs the current hours

// Get the current minutes
const minutes = now.getMinutes();
console.log("Current Minutes:", minutes); // Outputs the current minutes

// Get the current seconds
const seconds = now.getSeconds();
console.log("Current Seconds:", seconds); // Outputs the current seconds

// Get the current milliseconds
const milliseconds = now.getMilliseconds();
console.log("Current Milliseconds:", milliseconds); // Outputs the current milliseconds

// Get the time in milliseconds since January 1, 1970
const time = now.getTime();
console.log("Time in Milliseconds since January 1, 1970:", time); // Outputs the time in milliseconds since January 1, 1970

// Convert the Date object to a string
const dateString = now.toString();
console.log("Date as String:", dateString); // Outputs the date as a string
// Convert the Date object to an ISO string
const isoString = now.toISOString();
console.log("Date as ISO String:", isoString); // Outputs the date as an ISO string
// Convert the Date object to a locale string
const localeString = now.toLocaleString();
console.log("Date as Locale String:", localeString); // Outputs the date as a locale string

// Set a new year
now.setFullYear(2025);
console.log("Updated Year:", now.getFullYear()); // Outputs the updated year
// Set a new month (0-11)
now.setMonth(11);
console.log("Updated Month (0-11):", now.getMonth()); // Outputs the updated month (0-11)
// Set a new date
now.setDate(25);
console.log("Updated Date:", now.getDate()); // Outputs the updated date
// Set new hours
now.setHours(10);
console.log("Updated Hours:", now.getHours()); // Outputs the updated hours
// Set new minutes
now.setMinutes(30);
console.log("Updated Minutes:", now.getMinutes()); // Outputs the updated minutes
// Set new seconds
now.setSeconds(45);
console.log("Updated Seconds:", now.getSeconds()); // Outputs the updated seconds
// Set new milliseconds
now.setMilliseconds(500);
console.log("Updated Milliseconds:", now.getMilliseconds()); // Outputs the updated milliseconds
// Set a new time in milliseconds since January 1, 1970
now.setTime(1700000000000);
console.log("Updated Time in Milliseconds since January 1, 1970:", now.getTime()); // Outputs the updated time in milliseconds since January 1, 1970


// Now we are testing Date difference
const date1 = new Date('2022-01-01');
const date2 = new Date('2023-01-01');
const diffTime = Math.abs(date2 - date1);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
console.log("Difference in Days between 2022-01-01 and 2023-01-01:", diffDays); // Outputs the difference in days 