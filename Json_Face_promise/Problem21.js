/*
TODO: Problem-21: সিনেমার জন্য মুভি এর ডিটেলস থাকবে , যেমন -title ,রিলিজ ইয়ার,actors এবং ratings। actors একটা এরে হবে ( যেখানে actors দের নাম থাকবে ) এবং রেটিংস একটা নম্বর। তারপর জেসন.স্ট্রিংইফায় দিয়ে কনভার্ট করো , কনভার্ট করার পর সেটাকে আবার জাভাস্ক্রিপ্ট অবজেক্ট কনভার্ট করো 

*/

// Solution-21:

const movieDetails = {
    title: 'Inception',
    releaseYear: 2010,
    actors: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Ellen Page'],
    ratings: 8.8
};
const movieDetailsJSON = JSON.stringify(movieDetails);
console.log(movieDetailsJSON);