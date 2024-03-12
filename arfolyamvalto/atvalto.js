function addZero(i) {
    if (i < 10) {i = "0" + i}
    return i
}

function getTime() {
    let date = new Date()
    let hours = addZero(date.getHours())
    let minutes = addZero(date.getMinutes())

    document.querySelector('#idopont').innerHTML = `${hours}:${minutes}`
}

// API: https://api.coingecko.com/api/v3/exchange_rates

const API = 'https://api.coingecko.com/api/v3/exchange_rates'

/*

    Minden a response.rates-ben van.
    Nekem kell:
    - eur
    - czk
    - gbp
    - huf
    - jpy
    - pln
    - usd
    - chf

*/

/* 

    Valuta számítás:
    1 bitcoin ~ 26 millió ft
    1 bitcoin ~ 65000 euro

    huf / eur

*/

/* 

    Változók:
    #valutak.value
    #atvaltaniKivantErtek
    #atvaltas_gomb
    #ertekKiiras

*/

let valutas = {}

async function getRate() {
    getTime()
    let response = await fetch(API)
    response = await response.json()
    const eur = response.rates.eur.value
    const czk = response.rates.czk.value
    const gbp = response.rates.gbp.value
    const huf = response.rates.huf.value
    const jpy = response.rates.jpy.value
    const pln = response.rates.pln.value
    const usd = response.rates.usd.value
    const chf = response.rates.chf.value
    
    const eur_to_huf = huf / eur
    const czk_to_huf = huf / czk
    const gbp_to_huf = huf / gbp
    const jpy_to_huf = huf / jpy
    const pln_to_huf = huf / pln
    const usd_to_huf = huf / usd
    const chf_to_huf = huf / chf
    valutas = {
        huf: huf,
        eur: eur_to_huf,
        czk: czk_to_huf,
        gbp: gbp_to_huf,
        jpy: jpy_to_huf,
        pln: pln_to_huf,
        usd: usd_to_huf,
        chf: chf_to_huf
    }

    document.querySelector('#eur').textContent = valutas.eur.toFixed(2)
    document.querySelector('#usd').textContent = valutas.usd.toFixed(2)
    document.querySelector('#korona').textContent = valutas.czk.toFixed(2)
    document.querySelector('#font').textContent = valutas.gbp.toFixed(2)
    document.querySelector('#jen').textContent = valutas.jpy.toFixed(2)
    document.querySelector('#zloty').textContent = valutas.pln.toFixed(2)
    document.querySelector('#fra').textContent = valutas.chf.toFixed(2)
}


let valutakSelect = document.getElementById('valutak')
let atvaltaniKivantErtek = document.getElementById('atvaltaniKivantErtek')
const atvaltas_gomb = document.getElementById('atvaltas_gomb')
const ertekKiiras = document.getElementById('ertekKiiras')

function szamitas(valutaSzorzo) {
    let osszeg = (parseInt(atvaltaniKivantErtek.value) * valutaSzorzo).toFixed(2)
    ertekKiiras.textContent = osszeg + 'Ft'
}

atvaltas_gomb.addEventListener('click', (e) => {
    switch (valutakSelect.value) {
        case 'eur':
            szamitas(valutas.eur)
            break
        case 'usd':
            szamitas(valutas.usd)
            break
        case 'gbp':
            szamitas(valutas.gbp)
            break
        case 'chf':
            szamitas(valutas.chf)
            break
        case 'jpy':
            szamitas(valutas.jpy)
            break
        case 'pln':
            szamitas(valutas.pln)
            break
    }
})

window.onload = getRate()
