const items = document.querySelector('#cuccok')
const termekNev = document.querySelector('#termekNev')
const termekAr = document.querySelector('#termekAr')

let state = {
    products: [
        {
            id: 1,
            termek: 'Kecskesajt',
            ar: 500,
            isavailable: true
        },
        {
            id: 2,
            termek: 'Kefír',
            ar: 80,
            isavailable: false
        }
    ]
}

function render() {
    let productsHTML = ''
    for (product of state.products) {
        productsHTML += `<div class="item ${product.isavailable ? `` : `is-unavailable`}">
        <p>${product.termek}</p>
        <p>${product.ar} Ft</p>
        <p>${product.isavailable ? 'Raktáron' : 'Nincs raktáron'}</p>
        <button type="button">Eltávolítás</button>
        </div>`
    }
    items.innerHTML = productsHTML
}

window.onload = render()

