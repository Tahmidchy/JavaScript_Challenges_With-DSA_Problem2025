/*
TODO: Problem-17: Check if this object has an author property, const article = { title : "Learning JS", category : "Programming"}
*/

// Solution:
const article = { title : "Learning JS", category : "Programming"}
const hasAuthorProperty = article.hasOwnProperty('author');
console.log(hasAuthorProperty); // Logs false, since the author property does not exist in the object