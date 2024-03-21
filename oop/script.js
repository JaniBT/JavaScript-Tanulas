let Product = {
    name: 'funyiro',
    price: 75000,
    isInStock: true,


    applyDiscount: function(discount) {
        this.price = this.price * discount
    },

    getMessage: function() {
        return `A termék neve: ${this.name}, ára: ${this.price} és ${this.isInStock ? 'van készleten' : 'nincs készleten'}`
    },
}

Product.applyDiscount(0.9)
console.log(Product.getMessage())

function Termek(name, price, isInStock) {
    this.name = name
    this.price = price
    this.isInStock = isInStock
}

Termek.prototype.applyDiscount = function(discount) {
    this.price = this.price * discount
}

Termek.prototype.getMessage = function() {
    return `A termék neve: ${this.name}, ára: ${this.price} és ${this.isInStock ? 'van készleten' : 'nincs készleten'}`
}

let termekek = [
    new Termek('Kasza', 23000, true),
    new Termek('Kasza', 23000, true),
    new Termek('Kasza', 23000, true),
    new Termek('Kasza', 23000, true),
    new Termek('Kasza', 23000, true)
]

for (const termek of termekek) {
    console.log(termek.getMessage())
}

class Termek_ {

    quantity = 10

    constructor(name, price, isInStock) {
        this.name = name
        this.price = price
        this.isInStock = isInStock
    }

    applyDiscount = function(discount) {
        this.price = this.price * discount
    }
    
    getMessage = function() {
        return `A termék neve: ${this.name}, ára: ${this.price} és ${this.isInStock ? 'van készleten' : 'nincs készleten'}`
    }
}

let termek2 = new Termek_('Ásó', 4300, true)
termek2.applyDiscount(0.9)
console.log(termek2.getMessage())