/*

TODO: Problem-6: Your friend list is again ['Leonarad','Brad Pit','Kate Winslet','Audrey Hepburn','Johnny Depp'], you want to find the third letter, do the work by mapping each friend's name.

*/

// Solution:

const FriendList = ['Leonarad', 'Brad Pit', 'Kate Winslet', 'Audrey Hepburn', 'Johnny Depp'];
const ThirdLetter = FriendList.map(friend => friend[2]);
console.log(ThirdLetter); // Output: ['o', 'a', 't', 'd', 'h']
// The map method creates a new array populated with the third letter of each friend's name, effectively extracting the character at index 2 from each string in the FriendList array.
// This solution uses the map operator to iterate over each friend's name in the FriendList array and accesses the character at index 2, resulting in a new array of third letters. The original array remains unchanged.
// The output is logged to the console to verify the extracted third letters.