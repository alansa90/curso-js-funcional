let qtdeDeExecucoes = 0

//Pura!
function somar (a, b) {
  qtdeDeExecucoes += 1 // efeitos colaterais observáveis
  return a + b
}

console.log(qtdeDeExecucoes)
console.log(somar(3, 4))
console.log(somar(3, 4))
console.log(somar(3, 4))
console.log(somar(3, 4))
console.log(somar(3, 4))
console.log(somar(3, 4))
console.log(qtdeDeExecucoes)