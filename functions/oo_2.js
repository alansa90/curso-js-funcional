class Product {
  constructor (name, price, discount = 0.05) {
    this.name = name
    this.price = price
    this.discount = discount
  }

  get name () {
    return `Product: ${this._name}`
  }

  get finalPrice () {
    return this.price * (1 - this.discount)
  }

  set name (newName) {
    this._name = newName.toLocaleUpperCase()
  }

  get price () {
    return this._price
  }

  set price (newPrice) {
    if (newPrice >= 0) {
      this._price = newPrice
    }
  }
}


const p1 = new Product('Pen', 10)
p1.name = 'Pen'
p1.price = -20
console.log(p1.name)
console.log(p1.price)

const p2 = new Product('Fridge', 2345.98, 0.8)
console.log(p2.name)
console.log(p2.price)
console.log(p2.finalPrice)