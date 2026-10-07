/*
TODO: Problem-37: Write a code where json.parse the data using .parse, let's say the JSON data is { Product : 'Date ',Price : 450 }. However, the server may sometimes send wrong data, for example, it may send string data with "Data Corrupted". If an error occurs, handle it in a catch block and give a message to the console "Invalid json format"
*/

// Solution: 

// Simulating the server response
// Scenario A: '{"Product": "Date", "Price": 450}' 
// Scenario B: "Data Corrupted"
const rawData = '{"product": "Date","Price": 450}'; 

try {
  // Attempting to parse the string into a JavaScript object
  const parsedData = JSON.parse(rawData);
  
  console.log("Data parsed successfully:", parsedData);
} catch (error) {
  // If JSON.parse fails, it jumps straight here
  console.error("Invalid json format");
}

