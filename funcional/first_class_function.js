// Diz-se qye uma linguagem de programação possui
// funções de primeira classe quando funções nessa
// linguagem são tratadas como qualquer outra variável.

const x = 3

const y = function (text) {
  return `Esse é o texto: ${text}`
}

const z = () => console.log('Zzzz!')

console.log(x)
console.log(y('Olá!'))
z()