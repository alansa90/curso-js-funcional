const cart = [
  { name: 'Pen', qde: 10, price: 7.99, fragile: true },
  { name: 'Printer', qde: 1, price: 649.50, fragile: true },
  { name: 'Copybook', qde: 4, price: 27.10, fragile: false },
  { name: 'Pencil', qde: 3, price: 5.82, fragile: false },
  { name: 'Scissor', qde: 1, price: 19.20, fragile: true }
]

const fragile = item => item.fragile

const getTotal = item => item.qde * item.price

const getAverage = (acc, el) => {
    const newQde = acc.qde + 1
    const newTotal = acc.total + el
    return {
      qde: newQde,
      total: newTotal,
      average: newTotal/newQde
    }
}

const initialAverage = { qde: 0, total: 0, average: 0}

const average = cart 
  .filter(fragile)
  .map(getTotal)
  .reduce(getAverage, initialAverage)
  .average.toFixed(2)

//1. fragile: true
//2. qde: 4, price: 27.10 -> total
//3. average totals

// const average = cart
//   .filter(item => item.fragile)
//   .map(item => item.qde * item.price)
//   .reduce((acc, el, i, array) => {
//     const newQde = acc.qde + 1
//     const newTotal = acc.total + el
//     return {
//       qde: newQde,
//       total: newTotal,
//       average: newTotal/newQde
//     }
//   }, { qde: 0, total: 0, average: 0})

console.log(average)