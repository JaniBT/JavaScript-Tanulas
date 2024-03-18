/* 
    Saját ip cím: https://api.ipify.org/?format=json
    Az IP-ről adatok: https://ipinfo.io/{sajat_ip}/geo
*/

const API_URL = 'https://api.ipify.org/?format=json'

let myIP = ''
let state = {}


function getIP() {
    fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        myIP = data.ip
        getDataFromIP()
        render(myIP, state)
    })
    .catch(error => console.error('Hiba: ', error))
}

getIP()

function render(IP, state) {
    document.querySelector('#ip-cim').innerHTML = IP
    const adatok = document.querySelectorAll('.adat')
    
}

function getDataFromIP() {
    fetch(`https://ipinfo.io/${myIP}/geo`)
    .then(response => response.json())
    .then(data => {
        state = data
    })
    .catch(error => console.error('Hiba', error))
}