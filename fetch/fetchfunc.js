/*
    Login url: https://reqres.in/api/login
    Body:
    {
      email: "eve.holt@reqres.in",
      password: "ok"
    }

    Users url: https://reqres.in/api/users
*/

const LOGIN_API = 'https://reqres.in/api/login'
const USER_API = 'https://reqres.in/api/users'

const form = document.querySelector('#login')

let state = []

form.onsubmit = (e) => {
  e.preventDefault()
  const inProgress = document.getElementById('message')
  inProgress.textContent = 'Folyamatban'
  e.target.elements.email.disabled = true
  e.target.elements.password.disabled = true
  document.querySelector('#login button').disabled = true

  const Email = e.target.elements.email.value
  const passWord = e.target.elements.password.value

  const body = JSON.stringify({
    email: Email,
    password: passWord
  })

  fetch(LOGIN_API, {
    method: 'POST',
    body: body,
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then((response) => {
    console.log(response)
    if (!response.ok) {
      return Promise.reject('login_error')
    }
    const panel = document.querySelector('.container .row .col-6')
    panel.style.display = "none"
    const message = document.getElementById('message')
    message.innerHTML

    return response.json()
  })
  .then((response) => {
    return fetch(USER_API)
  })
  .then((response) => {
    if (!response.ok) {
      return Promise.reject('users error')
    }
    
    return response.json()
  })
  .then((userPage) => {
    console.log(userPage)
    state = userPage.data
    renderUsers()
  })
  .catch((error) => {
    alert(error)
    const inProgress = document.getElementById('message')
    inProgress.textContent = ''
    e.target.elements.email.disabled = false
    e.target.elements.password.disabled = false
    document.querySelector('#login button').disabled = false
  })
}

function renderUsers() {
  let usersHTML = ''

  for (let user of state) {
    usersHTML += `<li class="list-group-item">${user.first_name} ${user.last_name}</li>`
  }

  document.querySelector('#user-list-container').innerHTML = `<ul class="list-group">${usersHTML}</ul>`
}