const letrasAninhadas = [
  ['O', 'l', 'a'],
  [' '],
  ['m', 'u', 'n', 'd', 'o'],
  ['!', '!', '!', '!']
]

const letras = letrasAninhadas.flat(Infinity)
console.log(letras)


const resultado = letras
  .map(l => l.toLocaleUpperCase())
  .reduce((a, b) => a + b) 

console.log(resultado)