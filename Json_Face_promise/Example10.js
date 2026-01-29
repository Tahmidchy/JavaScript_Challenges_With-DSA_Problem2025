/*
TODO: Now we are testing on the JSON Delete Example.
*/

const url = 'https://jsonface.com/api/examples/promise/1';
const options = {
    method: 'DELETE',
};
fetch(url, options)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
