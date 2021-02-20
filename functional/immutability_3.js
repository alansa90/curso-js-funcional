const { RSA_NO_PADDING } = require("constants")

const pessoa = Object.freeze({
  nome: 'Maria',
  altura: 1.76,
  cidade: "São Paulo",
  end: Object.freeze({
    rua: 'Feliz!'
  })
})

// Passagem por referencia
function alterarPessoa (pessoa) {
  const novaPessoa = {...pessoa} //(copia rasa, utilizar bibliotecas para criar copias - lodash é uma delas)
  novaPessoa.nome = 'João'
  novaPessoa.cidade = 'Fortaleza'
  novaPessoa.end.rua = 'ABC'
  return novaPessoa
}

const novaPessoa = alterarPessoa(pessoa)
// Atribuição por referência

const outraPessoa = pessoa

// Passagem por referencia
// const novaPessoa = pessoa
// novaPessoa.nome = 'João'
// novaPessoa.cidade = 'Fortaleza'

console.log(pessoa)
console.log(novaPessoa)

// atribuição por valor (copia!)
let a = 3
let b = a

a++
b--

console.log(a, b)
