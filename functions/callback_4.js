
const cart = [
  { name: 'Pen', qde: 10, price: 7.99, fragile: true },
  { name: 'Printer', qde: 1, price: 649.50, fragile: true },
  { name: 'Copybook', qde: 4, price: 27.10, fragile: false },
  { name: 'Pencil', qde: 3, price: 5.82, fragile: false },
  { name: 'Scissor', qde: 1, price: 19.20, fragile: true }
]

const getName = item => item.name
const qdeGreaterThanZero = item => item.qde > 0
const qdeGreaterThanOrEqualZero = item => item.qde >= 0
const qdeVeryLarge = item => item.qde >= 1000

const validItemsNames = cart
  .filter(qdeGreaterThanZero)
  .map(getName)

console.log(validItemsNames)

Array.prototype.meuFilter = function (fn) {
  const filtered = []
  for (let i = 0; i < this.length; i += 1) {
    if (fn(this[i], i, this)) {
      filtered.push(this[i])
    }
  }
  return filtered
}
const validItemsNames2 = cart
  .meuFilter(qdeGreaterThanZero)
  .map(getName)
console.log(validItemsNames2)