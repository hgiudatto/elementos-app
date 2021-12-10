const getPosts = async (userId) => {
    const url = "https://jsonplaceholder.typicode.com/posts?userId=1"+userId;
    const resp = await fetch(url);
    const posts = await resp.json();

    return posts;
}

export default getPosts;
