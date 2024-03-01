const button = document.querySelector('#fetch-posts')
const post_div = document.querySelector('#post-list-container')
const URL = 'https://jsonplaceholder.typicode.com/posts'

button.onclick = function() {
    fetch(URL)
    .then(response => response.json())
    .then(data => {
        data.forEach(post => {
            const title = post.title
            const body = post.body

            post_div.innerHTML += `<p>${title}</p><small>${body}</small>`
        })
    })
    .catch(error => {
    console.error('Error:', error)
    });
}