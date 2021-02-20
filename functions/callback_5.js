const cart = [
  { name: 'Pen', qde: 10, price: 7.99, fragile: true },
  { name: 'Printer', qde: 1, price: 649.50, fragile: true },
  { name: 'Copybook', qde: 4, price: 27.10, fragile: false },
  { name: 'Pencil', qde: 3, price: 5.82, fragile: false },
  { name: 'Scissor', qde: 1, price: 19.20, fragile: true }
]

const getTotal = item => item.qde * item.price
const sum = (acc, el) => {
  console.log(acc, el)
  return acc + el
}

// const totals = cart.map(getTotal)

// const grandTotal = totals.reduce(sum)

const grandTotal = cart
  .map(getTotal)
  .reduce(sum)

console.log(grandTotal)

Array.prototype.meuReduce = function (fn, initial) {
  let acc = initial
  for ( let i = 0; i < this.length; i += 1) {
    if(!acc && i === 0) {
      acc = this[i]
      continue
    }

    acc = fn(acc, this[i], i, this)
  }
  return acc
}

const grandTotal2 = cart
  .map(getTotal)
  .meuReduce(sum)

console.log(grandTotal2)