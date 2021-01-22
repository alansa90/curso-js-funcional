//arrow function

const felizNatal  = () => console.log('Feliz Natal')

felizNatal()    

const saudacao = (nome) => 'Fala ' + nome + '!!!'
console.log(saudacao('Alan'))

// const saudacao = nome => 'Fala ' + nome + '!!!'
// console.log(saudacao('Alan'))

// const saudacao = nome => `Fala ${nome}, blz!?!`
// console.log(saudacao('Alan'))

const somar = (numeros) => {
  let total = 0
  for (let n of numeros) {
    total += n
  }
  return total
}

// const somar = (numeros) => {
//   let total = 0
//   for (let i = 0; i< numeros.length; i += 1) {
//     total = total + numeros[i]
//   }
//   return total
// }

console.log(somar([1,2,5,75,10,30,50,90]))