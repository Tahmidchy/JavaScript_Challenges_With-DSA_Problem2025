/*
TODO: Problem-20: একটা weather অবজেক্ট বানা , যার মধ্যে সিটি ,temperature,humidity এবং forecast (এরে) থাকবে , forecast array তে অন্তত ৭ দিনের সম্ভাব্য temperature থাকবে , এইটাকে জেসনে কনভার্ট করো 
*/

// Solution-20: 

const weather = {
    city: 'Dhaka',
    temperature: 30,
    humidity: 70,
    forecast: [31, 29, 28, 30, 32, 33, 31]
};
const weatherJSON = JSON.stringify(weather);
console.log(weatherJSON);
