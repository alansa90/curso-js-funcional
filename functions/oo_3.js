function Product (name, price, discount = 0.15) {
  this.name = name
  this.price = price
  this._discount = discount

  this.priceFinal = function () {
    return this.price * (1 - this._discount)
  }
}

Product.prototype.log = function () {
  console.log(`Name: ${this.name} Price: R$${this.price}`)
}

Object.defineProperty(Product.prototype, 'discount', { 
  get: function () { 
    return this._discount
  },

  set: function (newDiscount) {
    if (newDiscount >= 0 && newDiscount <= 1) {
      this._discount = newDiscount
    }
  }
})

Object.defineProperty(Product.prototype, 'discountString', { 
  get: function () { 
    return `${this._discount * 100}% discount!`
  }
})

const p1 = new Product('Pen', 8.59)
console.log(p1.name)
p1.log()

const p2 = new Product('Fridge', 2345.98)
console.log(p2.price)
console.log(p2.discount)
p2.discount = 0.99
console.log(p2.discount)
console.log(p2.priceFinal())
console.log(p2.discountString)