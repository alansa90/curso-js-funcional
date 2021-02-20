function sum (x, y) {
  return x + y
}

function subtraction (x, y) {
  return x - y
}

function multiply (x, y) {
  return x * y
}

function calculate (fn) {
  if (typeof fn === 'function') {
    return function (n1) {
      return function (n2) {
        return fn (n1, n2)
      }
    }
  }
  
}

console.log(calculate(sum)(2)(3))
console.log(calculate(subtraction)(2)(3))
console.log(calculate(multiply)(2)(3))