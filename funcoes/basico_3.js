//arrow function

const felizNatal  = () => console.log('Feliz Natal')

felizNatal()    

const saudacao = (nome) => 'Fala ' + nome + '!!!'
console.log(saudacao('Alan'))

// const saudacao = nome => 'Fala ' + nome + '!!!'
// console.log(saudacao('Alan'))

// const saudacao = nome => `Fala ${nome}, blz!?!`
// console.log(saudacao('Alan'))

const somar = (...numeros) => {
  console.log(Array.isArray(numeros))
  let total = 0
  for (let n of numeros) {
    total += n
  }
  return total
}


// const somar = (numeros) => {
//   let total = 0
//   for (let n of numeros) {
//     total += n
//   }
//   return total
// }

// const somar = (numeros) => {
//   let total = 0
//   for (let i = 0; i< numeros.length; i += 1) {
//     total = total + numeros[i]
//   }
//   return total
// }

console.log(somar(1,2,5,7,9,2,3,4,6))

const subtrait = (a, b) => a - b
console.log(5, 3)

const potencia = base => exp => Math.pow(base, exp)
console.log(potencia(2)(8))

//this
Array.prototype.log = function () {
  console.log(this)
}

const numeros = [1, 2, 3]
numeros.log()

Array.prototype.ultimo = function () {
  console.log(this[this.length - 1])
}

const numerosU = [1, 2, 3]
numeros.ultimo()