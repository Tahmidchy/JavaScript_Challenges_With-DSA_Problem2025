/*
TODO: Problem 12 : Profile Object Check the 'twitter' property of the 'social' object using optional chaining; if 'twitter' does not exist, print 'Twitter handle not available'.
*/

//Solution:

let profile = {
    name: "John Doe",
    social: {
        facebook: "johndoe.fb",
        instagram: "johndoe.ig"
    }
};

let twitterHandle = profile.social?.twitter ?? 'Twitter handle not available';
console.log(twitterHandle); // Output: Twitter handle not available