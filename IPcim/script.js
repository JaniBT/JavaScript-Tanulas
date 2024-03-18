/* 
    Saját ip cím: https://api.ipify.org/?format=json
    Az IP-ről adatok: https://ipinfo.io/{sajat_ip}/geo
*/

const API_URL = 'https://api.ipify.org/?format=json'

let myIP = ''
let state

function getDataFromIP() {
    fetch(`https://ipinfo.io/${myIP}/geo`)
    .then(response => response.json())
    .then(data => {
        state = data
        render(myIP, state)
    })
    .catch(error => console.error('Hiba', error))
}

function getIP() {
    fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        myIP = data.ip
        getDataFromIP()
    })
    .catch(error => console.error('Hiba: ', error))
}

function render(IP, adattable) {
    document.querySelector('#ip-cim').innerHTML = IP
    const adatok = document.querySelectorAll('.adat')
    let table = []
    for (const key in adattable) {
        let ertek = adattable[key]
        table.push(ertek)
    }
    let index = 1
    for (const adat of adatok) {
        adat.innerHTML = table[index]
        index += 1
    }
}

window.onload = getIP()