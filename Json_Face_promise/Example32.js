/*
TODO: Example-32 : Now we are testing async await for skip callback hell
*/

// Solution: 

async function fetchData() {
  try {
    // Get the user
    const userRes = await fetch('user-url');
    const user = await userRes.json();

    // Get posts for that user
    const postRes = await fetch(`post-url?userId=${user.id}`);
    const posts = await postRes.json();

    // Safety Check: Make sure the user actually has posts!
    if (posts.length > 0) {
      const cmntsRes = await fetch(`c-url?postId=${posts[0].id}`);
      const cmnts = await cmntsRes.json();
      console.log("Comments:", cmnts);
    } else {
      console.log("This user has no posts.");
    }

  } catch (error) {
    console.error('Error:', error);
  }
}

// Fixed the name here to match the function name
fetchData();