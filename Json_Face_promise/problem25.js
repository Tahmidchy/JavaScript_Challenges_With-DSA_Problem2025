/*
TODO: Problem-25: একটা প্রমিজ লিখো , এই প্রমিজ যখন resolve করবে তখন রিটার্ন হিসাবে একটা এরে পাবে , সেখানে অনেকগুলো ব্যাবহারকারি নাম থাকবে , আর যদি রিজেক্ট করে , তখন রিটার্ন করে , কোন ব্যাবহারকারী ডাটা নেয় 

*/

// Solution-25: 

const fetchUsers = new Promise((resolve, reject)=>{
    const userAvailable = true;
    const users = ["Alice", "Bob", "Charlie", "David", "Eve"];
    if(userAvailable){
        resolve(users);
    }else{
        reject('No users available at the moment.');
    }
});
fetchUsers.then((users)=>{
    console.log('Users:', users);
}).catch((error)=>{
    console.log(error);
});