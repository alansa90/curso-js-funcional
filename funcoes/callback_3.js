
const nums = [1, 2, 3, 4, 5]

// n = valor, i = indice, a = proprio array
const dobro = (n, i, a) => n * 2 + i + a.length

console.log(nums.map(dobro))

const nomes = ['Ana', 'Bia', 'Gui', 'Lia', 'Rafa']

const primeiraLetra = texto => texto[0]
const letras = nomes.map(primeiraLetra)
console.log(nomes, letras)


const carrinho = [
  { nome: 'Caneta', qtde: 10, preco: 7.99 },
  { nome: 'Impressora', qtde: 0, preco: 649.50 },
  { nome: 'Caderno', qtde: 4, preco: 27.10 },
  { nome: 'Lapis', qtde: 3, preco: 5.82 },
  { nome: 'Tesoura', qtde: 1, preco: 19.20 },
]

const getName = item => item.nome
const getValue = item => item.qtde * item.preco

console.log(carrinho.map(getName))
console.log(carrinho.map(getValue))

Array.prototype.meuMap = function (fn) {
  const mapped = []
  for (let i = 0; i < this.length; i += 1) {
    const results = fn(this[i], i, this)
    mapped.push(results)
  }
  return mapped
  // for (let el of this) {

  // }
}

console.log(carrinho.meuMap(getName))
console.log(carrinho.meuMap(getValue))