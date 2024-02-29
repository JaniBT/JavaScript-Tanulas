const button = document.querySelector('#fetch-posts')
button.onclick = function() {
    let xhr = new XMLHttpRequest
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4 && xhr.status === 200) {
            console.log(JSON.parse(xhr.responseText))
        }
    }

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts')
    xhr.send()
}