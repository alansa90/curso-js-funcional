let a = 1
console.log(a)

let p = new Promise(function(resolve, reject) {
  resolve(3)
})

p.then((valor) => console.log(valor))

/***** */

p = new Promise(function(resolve) {
  resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

p
  .then(valor => valor[0])
  .then(primeiro => primeiro[0])
  .then(letra => letra.toLowerCase())
  .then(letraMinuscula => console.log('sem function', letraMinuscula))

/****** */  

const primeiroElemento = array => array[0]

const primeiraLetra = string => string[0]

let letraMinuscula = letra => letra.toLowerCase()
p
  .then(primeiroElemento)
  .then(primeiraLetra)
  .then(letraMinuscula)
  //.then(v => console.log(v))
  .then(console.log)