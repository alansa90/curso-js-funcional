function goodMorning () {
  console.log('Bom dia!')
}

const goodAfternoon = function () {
  console.log('Boa tarde!')
}

// 1) Pass a function as a parameter to another function
function performAnything (fn) {
  if (typeof fn  === 'function') {
    fn()
  }
}

performAnything(3)
performAnything(goodMorning)
performAnything(goodAfternoon)

// 2) Return a function from another function

function potency (base) {
  return function (exp) {
    return Math.pow(base, exp)
  }
}

const potency2 = potency(2) 

console.log(potency2(8))
console.log(potency(3)(4))

const pot34 = potency(3)(4)
console.log(pot34)
