/*
TODO: Example-29: Now we are testing async and await
*/

// Solution: 

async function fetchData() {
    try {
        const url = 'https://jsonPlaceholder.typicode.com/users/1';
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    }
    catch (error) {
        console.log('Error:',error);
    }
}
fetchData();