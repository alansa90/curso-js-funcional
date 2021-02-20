
const numbers = [1, 2, 3, 4, 5]

// n = valor, i = index, a = own array
const double = (n, i, a) => n * 2 + i + a.length

console.log(numbers.map(double))

const names = ['Ana', 'Bia', 'Gui', 'Lia', 'Rafa']

const firstLetter = text => text[0]
const letters = names.map(firstLetter)
console.log(names, letters)


const cart = [
  { name: 'Pen', qde: 10, price: 7.99, fragile: true },
  { name: 'Printer', qde: 1, price: 649.50, fragile: true },
  { name: 'Copybook', qde: 4, price: 27.10, fragile: false },
  { name: 'Pencil', qde: 3, price: 5.82, fragile: false },
  { name: 'Scissor', qde: 1, price: 19.20, fragile: true }
]

const getName = item => item.name
const getValue = item => item.qde * item.price

console.log(cart.map(getName))
console.log(cart.map(getValue))

Array.prototype.meuMap = function (fn) {
  const mapped = []
  for (let i = 0; i < this.length; i += 1) {
    const results = fn(this[i], i, this)
    mapped.push(results)
  }
  return mapped
  // for (let el of this) {

  // }
}

console.log(cart.meuMap(getName))
console.log(cart.meuMap(getValue))