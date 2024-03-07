/* 

    API: https://randomuser.me/api/?resuts=3&seed=abc&nat=us

*/

const API_KEY = 'https://randomuser.me/api/?results=3&seed=abc&nat=us'

let user = {}
let user2 = {}
let user3 = {}

fetch(API_KEY, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
})
.then(resp => resp.json())
.then(data => {
    user = data.results[0]
    user2 = data.results[1]
    user3 = data.results[2]
    render()
})
.catch(error => console.error('Hiba: ', error))

function render() {
    const menu = `<h1 class="main__title">Munkatársaink</h1>
    <div class="main">
        <div class="main__block">
            <img class="main__image" src="${user.picture.thumbnail}" alt="" />
            <h2 class="main__name">Name: ${user.name.title + " " + user.name.first + " " + user.name.last}</h2>
            <p class="main__paragraph">Country: ${user.location.country}</p>
            <p class="main__paragraph">Email: ${user.email}</p>
        </div>
        <div class="main__block">
            <img class="main__image" src="${user2.picture.thumbnail}" alt="" />
            <h2 class="main__name">Name: ${user2.name.title + " " + user2.name.first + " " + user2.name.last}</h2>
            <p class="main__paragraph">Country: ${user2.location.country}</p>
            <p class="main__paragraph">Email: ${user2.email}</p>
        </div>
        <div class="main__block">
            <img class="main__image" src="${user3.picture.thumbnail}" alt="" />
            <h2 class="main__name">Name: ${user3.name.title + " " + user3.name.first + " " + user3.name.last}</h2>
            <p class="main__paragraph">Country: ${user3.location.country}</p>
            <p class="main__paragraph">Email: ${user3.email}</p>
        </div>
    </div>`

    document.querySelector('#main').innerHTML = menu
}