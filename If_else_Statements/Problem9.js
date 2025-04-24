/*
TODO: Problem-9: If a student's GPA is 5 and his family's monthly income is less than 10,000 taka, he will not receive the scholarship and will have to pay for his studies.
*/

// Solution: 

let student_GPA = 5;
let family_income = 9500;
if (student_GPA >= 5 && family_income < 10000) {
    console.log("You are eligible for Scholarship");
}else{
    console.log("You are not eligible for Scholarship and you will must pay your collage fee");
}