/*
TODO: Example-30: Now we are testing without async and await.
*/
// Solution:

const fetchUserData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:',error);
    }
};
fetchUserData();