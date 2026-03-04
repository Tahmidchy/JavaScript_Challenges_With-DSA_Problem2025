/*
TODO: Problem-38: ValidateInput নামে একটা ফাংশন বানা , যেটাকে ইউসার এর ইনপুট চেক করবে , ইনপুট হতে হবে ইমেইল এড্রেস (যেমন : টেস্ট @ এক্সাম্পল .কম )। ইনপুট ই-মেইলে যদি @ চিহ্ন না থাকে তাহলে custom এরর দেখাবে " ইনভ্যালিড ইমেইল ফরম্যাটে "
*/

//Solution: 

function ValidateInput(email) {
  try {
    // Check if the email contains the '@' symbol
    if (!email.includes("@")) {
      // If it doesn't, we manually "throw" a new error
      throw new Error("Invalid email format");
    }

    // If the check passes, the code continues here
    console.log("Success! Email is valid:", email);
    return true;

  } catch (error) {
    // This block catches the "Invalid email format" error we threw above
    console.error(error.message);
    return false;
  }
}

// --- Testing the function ---

ValidateInput("test@example.com"); // Output: Success! Email is valid: test@example.com
ValidateInput("bad-email-input");   // Output: Invalid email format