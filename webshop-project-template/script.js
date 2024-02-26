/*
    Product 

    Create
    Read
    Update
    Delete

    CRUD
*/


let state = {
    products: [
        {
            id: uuidv4(),
            name: 'Audi A8',
            price: 2500,
            isInStock: true
        },
        {
            id: uuidv4(),
            name: 'Mappa',
            price: 3500,
            isInStock: false
        },
        {
            id: uuidv4(),
            name: 'Nudes',
            price: 5500,
            isInStock: true
        }
    ],
    editedId: ''
}

function renderEditProduct() {

    if (state.editedId === '') {
        document.getElementById("edit-product").innerHTML = ''
        return
    }

    let foundProduct
    for (const product of state.products) {
        if(product.id === state.editedId) {
            foundProduct = product
            break
        }
    }
    
    let editFormHTML = `<h1>Termék szerkesztése:</h1>
        <form id="update-product" class="p-5">
        <label class="w-100">
        Név:
        <input class="form-control" type="text" name="name" value="${foundProduct.name}">
        </label>
        <label class="w-100">
        Ár:
        <input class="form-control" type="number" name="price" value="${foundProduct.price}">
        </label>
        <label class="w-100">
        Van készleten?
        <input class="form-control" type="checkbox" name="isInStock" ${foundProduct.isInStock ? 'checked' : ''}>
        </label>
        <button class="btn btn-primary" type="submit">Küldés</button>
    </form>`

    document.getElementById('edit-product').innerHTML = editFormHTML

    document.getElementById('update-product').onsubmit = (e) => {
        e.preventDefault()
        let price = Number(e.target.elements.price.value)
        let name = e.target.elements.name.value
        let isInStock = e.target.elements.isInStock.checked
        let foundIndex = getIndexById(state.editedId)

        state.products[foundIndex] = {
            id: e.target.dataset.productid,
            name: name,
            price: price,
            isInStock: isInStock
        }
        state.editedId = ''
        renderEditProduct()

        renderProducts()
    }
}

function getIndexById(id) {
    let foundIndex
    for (i = 0; i < state.products.length; i++) {
        if (state.products[i].id === id) {
            foundIndex = i
            break
        }
    }
    return foundIndex
}

function renderProducts() {
    let productsHTML = ''

    for (const product of state.products) {
        productsHTML += `
        <div class="card m-2 p-2 ${product.isInStock ? `` : `bg-danger`}">
            <p>${product.name}</p>
            <p>${product.price}</p>
            <button class="btn btn-warning mb-2 float right edit-product" data-productid="${product.id}">Szerkesztés</button>
            <button class="btn btn-danger float-right delete-product" data-productid="${product.id}">
                Törlés
            </button>       
        </div>
        `;
    }
    document.getElementById("product-list-component").innerHTML = productsHTML;

    for (const editBtn of document.querySelectorAll('.edit-product')) {
        editBtn.onclick = function(e) {
            const id = e.target.dataset.productid
            state.editedId = id

            renderEditProduct()
        }
    }

    for (const deleteBtn of document.querySelectorAll('.delete-product')) {
        // action
        deleteBtn.onclick = function (e){
            const foundIndex = getIndexById(e.target.dataset.productid)
    
            //state change
            state.products.splice(foundIndex, 1);
    
            //render
            renderProducts();
        }
    }   
    document.getElementById('osszegzo').onclick = function(e) {
        let max_osszeg = 0
        for (const prod_price of state.products) {
            max_osszeg += prod_price.price
        }
        alert(`A termékek árának összege: ${max_osszeg} Ft`)
    }

    

}
window.onload = renderProducts;

// action, state change, render
// Tömbhöz új elem hozzáadaása: state.products.push({name: '...', price : 2500, isInStock: false})

//action
document.getElementById('create-product').onsubmit = function(e){
    // state change 
    e.preventDefault();
    let price = Number(e.target.elements.price.value);
    let name = e.target.elements.name.value;
    let isInStock = e.target.elements.isInStock.checked;

    //state
    state.products.push(
        {
            id: uuidv4(),
            name: name,
            price: price,
            isInStock: isInStock
        }
    )

    //render
    renderProducts();

    console.log(price);
    console.log(name);
    console.log(isInStock);
};

function uuidv4() {
    return `xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`.replace(/[xy]/g, function(c){
        let r = Math.random() * 16 | 0, v = c == `x` ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}