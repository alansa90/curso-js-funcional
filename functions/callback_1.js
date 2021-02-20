
function exec (fn, a, b) {
  return fn(a, b)
}
const sumTerminal = (x, y) => console.log(x + y)

const subtractionTerminal = (x, y) => console.log(x - y)

const subtraction = (x, y) => x - y

exec(sumTerminal, 56, 38)
exec(subtractionTerminal, 182, 27)

const r = exec(subtraction, 10, 5)
console.log(r)

const cb = () =>  console.log('Exec...')
setInterval(cb, 1000)

setInterval(() => console.log('Exec 2...'), 1000)
setInterval(function () {
  console.log('Exec 3...')
},5000)