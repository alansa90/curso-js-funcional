function somar(x, y) {
  return x + y
}

function subtrair (x, y) {
  return x - y
}

function multiplicar (x, y) {
  return x * y
}

function calcular (fn) {
  if (typeof fn === 'function') {
    return function (n1) {
      return function (n2) {
        return fn (n1, n2)
      }
    }
  }
  
}

console.log(calcular(somar)(2)(3))
console.log(calcular(subtrair)(2)(3))
console.log(calcular(multiplicar)(2)(3))