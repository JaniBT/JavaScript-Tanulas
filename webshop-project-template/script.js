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
            name: 'Teszt termék 1',
            price: 2500,
            isInStock: true
        },
        {
            id: uuidv4(),
            name: 'Teszt termék 2',
            price: 3500,
            isInStock: false
        },
        {
            id: uuidv4(),
            name: 'Teszt termék 3',
            price: 5500,
            isInStock: true
        }
    ]
}

function renderProducts() {
    let productsHTML = '';

    for (const product of state.products) {
        productsHTML += `
        <div class="card m-2 p-2 ${product.isInStock ? `` : `bg-danger`}">
            <p>${product.name}</p>
            <p>${product.price}</p>
            <button class="btn btn-danger float-right delete-product" data-productid="${product.id}">
                Törlés
            </button>       
        </div>
        `;
    }
    document.getElementById("product-list-component").innerHTML = productsHTML;

    for (const deleteBtn of document.querySelectorAll('.delete-product')) {
        // action
        deleteBtn.onclick = function (e){
            let id = e.target.dataset.productid;
    
            let foundIndex;
            for (let i = 0; i < state.products.length; i++) {
                if(state.products[i].id === id){
                    foundIndex = i;
                    break;
                }
            }
    
            //state change
            state.products.splice(foundIndex, 1);
    
            //render
            renderProducts();
        }
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