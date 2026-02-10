/*
TODO: Problem-23: লার্নিং প্ল্যাটফর্মের জন্য কোর্স এর কিছু ডাটা বানা ,সেখানে মিনিমাম ৩ টা কোর্স থাকবে , প্ৰত্যেকটা কোর্সে course টাইটেল ,ইন্সট্রাক্টরস নাম , duration এবং lesson (array )। লেসন এরে তে লেসন নাম,duration এবং ডিফিকাল্ট লেভেল থাকবে , ডিফিকাল্টি লেভেল বলতে beginner ,ইন্টারমিডিয়েট , অ্যাডভান্সড যেকোনো একটা মান হবে ,জেসন.স্ট্রিংইফায় দিয়ে কনভার্ট করো 

*/

//Solution-23:

const courses_Platform = {
    course1 : {
        courseTitle: 'Web Development',
        instructorName: 'Alice Johnson',
        duration: '8 weeks',
        lessons: ['HTML Basics', 'CSS Fundamentals', 'JavaScript Essentials'],
        difficultyLevel: 'beginner'
    },
    course2 : {
        courseTitle: 'Data Science',
        instructorName: 'Bob Smith',
        duration: '10 weeks',
        lessons: ['Data Analysis with Python', 'Machine Learning Basics', 'Data Visualization'],
        difficultyLevel: 'intermediate'
    },
    course3 : {
        courseTitle: 'Mobile App Development',
        instructorName: 'Charlie Brown',
        duration: '12 weeks',
        lessons: ['React Native Basics', 'UI/UX Design', 'Deployment'],
        difficultyLevel: 'advanced'
    }
}
const courses_Platform_JSON = JSON.stringify(courses_Platform);
console.log(courses_Platform_JSON);