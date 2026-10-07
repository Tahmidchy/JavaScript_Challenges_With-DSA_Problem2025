/*
TODO: Example-4:We are testing Nullish coalescing operator
*/

const user = {
    name:'John Doe',
}
console.log(user.name);
console.log(user.profile);
console.log(user.profile.email);

/*
In here we get error because the profile object is not defined in the user object. To avoid this error we can use Nullish coalescing operator (??) to provide a default value if the property is null or undefined.
*/