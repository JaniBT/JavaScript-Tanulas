// Super Konstans változók
const PRODUCT_DATA = '.product-data'
const SALE = '.sale'
const ORDER = '.order'
const PRODUCTS = '.products'
const PRODUCT = '.product'
const PRODUCT_NAME = '.product :nth-child(2) :nth-child(1)'
const SECOND_CHILD = `.product-data :nth-child(2)`

const sale_checkbox = document.querySelector(SALE)
const products2 = document.querySelectorAll(PRODUCT_DATA)

sale_checkbox.addEventListener('change', e => {
    if (sale_checkbox.checked) {
        for (const product of products2) {
            if (product.children.length >= 3) {
                product.parentElement.style.display = "inline-block"
            } else {
                product.parentElement.style.display = "none"
            }
        }
    } else {
        for (const product of products2) {
            product.parentElement.style.display = "inline-block"
        }
    }
})

const dropdown_menu = document.querySelector(ORDER)
const all_products = document.querySelector(PRODUCTS)
const all_product = all_products.querySelectorAll(PRODUCT)

// ez a függvény rendezi a sorrendet számok szerint
function rendezo_szamok(novekvo_or_csokkeno) {
    const sorrend = Array.from(all_product).sort(function(a, b) {
        // Kiszedem a product-on belüli div második elemét
        // így is lehet, csak eddig ezt nem tudtam xd
        const numA = parseFloat(a.querySelector(SECOND_CHILD).textContent)
        const numB = parseFloat(b.querySelector(SECOND_CHILD).textContent)

        if (novekvo_or_csokkeno) {
            console.log(numA - numB)
            return numA - numB
        }
        else {
            console.log(numB - numA)
            return numB - numA
        }
    })

    all_product.forEach(prod => prod.remove())

    while (all_products.firstChild) {
        all_products.firstChild.remove()
    }

    sorrend.forEach(prod => all_products.appendChild(prod))
}

// ez a függvény abc sorrendbe rendezi a div-eket vagy éppen fordítva
function rendezo_betuk(abc_or_cba) {
    const sortedItems = Array.from(all_product).sort((a, b) => {
        if (!abc_or_cba) {
            return b.textContent.localeCompare(a.textContent)
        } else {
            return a.textContent.localeCompare(b.textContent)
        }
    })

    all_product.forEach(prod => prod.remove())

    while (all_products.firstChild) {
        all_products.firstChild.remove()
    }

    sortedItems.forEach(prod => all_products.appendChild(prod))
}

function rendezes(szam) {
    const rendezo = true
    const ellen_rendezo = false
    switch (szam) {
        // rendezés növekvő sorrendbe
        case 0:
            rendezo_szamok(rendezo)
            break
        // rendezés csökkenő sorrendbe
        case 1:
            rendezo_szamok(ellen_rendezo)
            break
        // rendezés ABC sorrendbe
        case 2:
            rendezo_betuk(rendezo)
            break
        // rendezés CBA sorrendbe
        case 3:
            rendezo_betuk(ellen_rendezo)
            break
    }
}

// dropdown menü option-jének megváltoztatása aztán a függvény futtatása a megfelelő számmal
dropdown_menu.addEventListener('change', e => {
    const dropdown_value = Number(dropdown_menu.value)
    // rendezés függvény
    rendezes(dropdown_value)
})

//Keresés opció készítése
const search_bar = document.querySelector('#keyword')
search_bar.onchange = function(e) {
    const search_value = search_bar.value.toLowerCase()
    const elements = document.querySelectorAll(PRODUCT_NAME)
    // végig megy az elements objektumon és ha egyezést talál azt megjeleníti
    for (let i = 0; i < elements.length; i++) {
        let txtValue = elements[i].textContent || elements[i].innerText
        if (txtValue.toLowerCase().indexOf(search_value) > -1) {
            elements[i].parentElement.parentElement.style.display = "inline-block"
        } else {
            elements[i].parentElement.parentElement.style.display = "none"
        }
    }
}