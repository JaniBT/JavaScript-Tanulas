const items = document.querySelector('#cuccok')
const termekNev = document.querySelector('#termekNev')
const termekAr = document.querySelector('#termekAr')
const elerhetoE = document.querySelector('#termekElerheto')
const kuldes_gomb = document.querySelector('#kuldes')

let state = {
    products: [
        {
            id: termek_id(),
            termek: 'Kecskesajt',
            ar: 500,
            isavailable: true
        },
        {
            id: termek_id(),
            termek: 'Kefír',
            ar: 80,
            isavailable: false
        },
    ]
}

function renderProducts() {
    let productsHTML = ''
    for (product of state.products) {
        productsHTML += `<div class="item ${product.isavailable ? `` : `is-unavailable`}">
        <p>${product.termek}</p>
        <p>${product.ar} Ft</p>
        <p>${product.isavailable ? 'Raktáron' : 'Nincs raktáron'}</p>
        <button type="button" class="eltavolito" data-productid="${product.id}">Eltávolítás</button>
        </div>`
    }
    items.innerHTML = productsHTML

    for (const torlesGomb of document.querySelectorAll('.eltavolito')) {
        torlesGomb.onclick = function (e){
            let id = e.target.dataset.productid
    
            let fIndex
            for (let i = 0; i < state.products.length; i++) {
                if(state.products[i].id === id){
                    fIndex = i;
                    break
                }
            }
            
            state.products.splice(fIndex, 1);
            
            renderProducts()
        }
    }
}

window.onload = renderProducts()

kuldes_gomb.addEventListener('click', e => {
    if (!termekNev.value || !termekAr.value) {
        alert("Nem adott meg Termék nevet vagy Termék árat!")
    } else {
        productAdd = {
            id: termek_id(),
            termek: termekNev.value,
            ar: termekAr.value,
            isavailable: elerhetoE.checked ? true : false
        }
        state.products.push(productAdd)

        renderProducts()
    }
})

function termek_id() {
    let dynamic_id = Math.floor(Math.random() * 10000)
    let dynamic_id2 = Math.floor(Math.random() * 10000)
    return `${dynamic_id}-${dynamic_id2}`
}