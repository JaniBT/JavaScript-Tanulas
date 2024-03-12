/*
    Login url: https://reqres.in/api/login
    Body:
    {
      email: "eve.holt@reqres.in",
      password: "ok" - jelenleg bármilyen jelszóval működik
    }

    Users url: https://reqres.in/api/users
*/

let state = []

document.getElementById('login').onsubmit = e => {
    e.preventDefault()

    let inProgress = document.getElementById('message')
    inProgress.textContent = 'Folyamatban...'
    e.target.elements.email.disabled = true
    e.target.elements.password.disabled = true
    document.querySelector('#login button').disabled = true
    const email = e.target.elements.email.value
    const password = e.target.elements.password.value
    console.log('Email:', email)
    console.log('Password:', password)

    const body = JSON.stringify({
        email: email,
        password: password
    })

    loginAndFetchUsers(body)
}

// with async an API

async function loginAndFetchUsers(body){
    let loginRespone = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        body: body,
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (!loginRespone.ok) {
        alert('Login Failed')
        defaultInput()
        return
    }
    const panel = document.querySelector('.container .row .col-6')
    panel.style.display = 'none'
    // console.log(token)
    let userResponse = await fetch('https://reqres.in/api/users')
    if (!userResponse.ok) {
        console.log('users_error')
        defaultInput()
        return
    }
    let userPage = await userResponse.json()
    state = userPage.data
    defaultInput()
    renderUsers()
}

function defaultInput(){
  document.getElementById('message').textContent = ''
  document.getElementById('login').elements.email.disabled = false
  document.getElementById('login').elements.password.disabled = false
  document.querySelector('#login button').disabled = false
}

function renderUsers() {

    let usersHTML = ''

    for(let user of state){
        usersHTML += `<li class="list-group-item">${user.first_name} ${user.last_name}</li>`
    }
    document.getElementById('user-list-container').innerHTML = '<ul class="list-group">' + usersHTML + '</ul>'
}