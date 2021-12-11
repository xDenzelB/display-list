export function renderBlogs(blogData) {
    const blogPost = document.createElement('div');
    const titleEl = document.createElement('p');

    blogPost.classList.add('post');

    titleEl.textContent = `${blogData.user} says: ${blogData.title}`;

    blogPost.append(titleEl);

    for (let reply of blogData.reply) {
        const replyEl = document.createElement('p');

        replyEl.textContent = reply;
        replyEl.classList.add('reply');

        blogPost.append(replyEl);
    }
    return blogPost;

}