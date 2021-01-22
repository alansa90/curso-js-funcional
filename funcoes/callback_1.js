
function exec (fn, a, b) {
  return fn(a, b)
}
const somarNoTerminal = (x, y) => console.log(x + y)

const subtraitNoTerminal = (x, y) => console.log(x - y)

const subtrair = (x, y) => x - y

exec(somarNoTerminal, 56, 38)
exec(subtraitNoTerminal, 182, 27)

const r = exec(subtrair, 10, 5)
console.log(r)

const cb = () =>  console.log('Exec...')
setInterval(cb, 1000)

setInterval(() => console.log('Exec 2...'), 1000)
setInterval(function () {
  console.log('Exec 3...')
},5000)