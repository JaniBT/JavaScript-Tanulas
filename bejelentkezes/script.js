// https://reqres.in/api/login

const form = document.querySelector('form')
form.onsubmit = function(e) {
    e.preventDefault()

    let xhr = new XMLHttpRequest()

    let body = JSON.stringify({
        email: e.target.elements.email.value,
        password: e.target.elements.password.value
    })

    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4 && xhr.status === 200) {
            alert("Sikeres bejelentkezés")
        }
        else{
            alert("Sikertelen bejelentkezés")
        }
    }

    xhr.open('POST', 'https://regres.in/api/login')
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.send()
}