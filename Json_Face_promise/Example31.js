/*
TODO: Example-31: Now we are testing callback hell testing..
*/

//Simple pseudo code.will not run properly

fetch('user-url').then((user) => {
    return user.json();
}).then((user) => {
    return fetch(`post-url?userId=${user.id}`);
}).then((post) => {
    return post.json();
}).then((posts) => {
    return fetch(`c-url?postId=${posts[0].id}`);
}).then((cmnts) => {
    return cmnts.json();
}).then((cmnts) => {
    // DO somethings with likes
});