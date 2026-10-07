/*
TODO: Example-13: In here Example of using promise resolve and reject methods.
*/

// Solution-13:

const orderFood = new Promise((resolve, reject)=>{
    const foodReady = true;

    if(foodReady){
        resolve('Food is ready to be served!');
    } else {
        reject('Food is not ready yet. Please wait.');
    }
});
orderFood.then((message)=>{
    console.log(message);
}).catch((error)=>{
    console.log(error);
});