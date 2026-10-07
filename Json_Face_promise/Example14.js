/*
TODO: Example-14: Now we are Test the above promise resolve and reject methods by changing the foodReady variable .
*/
// Solution-14: 

const getUsers = new Promise((resolve, reject)=>{
    const userAvailable = true;
    const users = ["Alice", "Bob", "Charlie"];

    if(userAvailable){
        resolve(users);
    }else{
        reject('No users available at the moment.');
    }
});
getUsers.then((users)=>{
    console.log('Users:', users);
}).catch((error)=>{
    console.log(error);
});