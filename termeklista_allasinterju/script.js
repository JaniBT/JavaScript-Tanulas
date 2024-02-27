// Super Konstans változók
const PRODUCT_DATA = '.product-data'
const SALE = '.sale'
const ORDER = '.order'

const sale_checkbox = document.querySelector(SALE)
const products = document.querySelectorAll(PRODUCT_DATA)

sale_checkbox.addEventListener('change', e => {
    if (sale_checkbox.checked) {
        for (const product of products) {
            if (product.children.length >= 3) {
                product.parentElement.style.display = "inline-block"
            } else {
                product.parentElement.style.display = "none"
            }
        }
    } else {
        for (const product of products) {
            product.parentElement.style.display = "inline-block"
        }
    }
})

const dropdown_menu = document.querySelector(ORDER)
const all_product = document.querySelectorAll(PRODUCT_DATA)

function rendezes(szam) {
    switch (szam) {
        // rendezés növekvő sorrendbe
        case 0:
            let identifiers = []
            let prices = []
            for (const product of all_product) {
                
            }
            break
        // rendezés csökkenő sorrendbe
        case 1:
            break
        // rendezés ABC sorrendbe
        case 2:
            break
        // rendezés CBA sorrendbe
        case 3:
            break
    }
}

dropdown_menu.addEventListener('change', e => {
    const dropdown_value = Number(dropdown_menu.value)
    // rendezés függvény
    rendezes(dropdown_value)
})