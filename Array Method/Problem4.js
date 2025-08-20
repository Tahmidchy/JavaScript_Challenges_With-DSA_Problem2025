/*
TODO: Problem-4: You have some data about height, such as: [65,70,68,72,68,73] , now your job is to filter and find those whose height is taller than 69 inches.
*/

// Solution: 

const HeightList = [65, 70, 68, 72, 68, 73];
const TallerThan69 = HeightList.filter(height => height > 69);
console.log(TallerThan69); // Output: [70, 72, 73]
// The filter method creates a new array with all elements that pass the test implemented by the provided function, effectively filtering out heights that are 69 inches or shorter.
// This solution uses the filter operator to iterate over each height in the HeightList array and checks if the height is greater than 69 inches, resulting in a new array of heights that meet this condition. The original array remains unchanged.
// The output is logged to the console to verify the filtered heights.