/*
TODO: Problem-11: Now create a function called sendEmail, create a promise inside that function, create a promise inside that function and return that promise, this function will take a parameter, take an email as a parameter and on top of the promise there will be an array of vaildEmail inside that function. If the email that is sent as a parameter is in the array of validEmail, then the promise will resolve and say, email from Nigerian price, and if the email address is not found in validEmail, then it will say, Lets Dance in the spam folder
*/

// Solution:

function sendEmail(email) {
    const validEmails = ["brokenhart@gmail.com","tahmidchy@hotmail.com","xyz@xcompany.com"];

    return new Promise((resolve, reject) => {
        if (validEmails.includes(email)) {
            resolve("Email from Nigerian prince.");
        } else {
            reject("Let's Dance in the spam folder.");
        }
    });
}
// Test the function
sendEmail("tahmidchy@hotmail.com").then((message) => {
    console.log(message);
})
.catch((error) => {
    console.log(error);
});

/*
TODO: 
        "I think I miss you forever
        like the stars miss the sun in the morning sky
         like the night miss the morning
         like the winter miss the spring
         like the ocean miss the shore
         like the heart miss its beat
         like the soul miss its peace
         like the bird miss its wings
         like the flower miss the rain
         like the poet miss his rhyme
         like the song miss its tune
         like the dance miss its rhythm
         like the dream miss its meaning
         like the world miss its love
         like I miss you."
 */