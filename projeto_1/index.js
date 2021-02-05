const path = require('path')
const fn = require('./functions')

const caminho = path.join(__dirname, '..', 'dados', 'legendas')
const simbolos = [
  '.', '?', '!', '-', ',', '"', '♪', '_', '<i>', '</i>', '\r', '[', ']', '(', ')'
]

const agruparElementos = (palavras) => {
  return Object.values(palavras.reduce((acc, palavra) => {
    const p = palavra.toLowerCase()
    const qtde = acc[p] ? acc[p].qtde + 1 : 1
    acc[p] = { elemento: p, qtde }
    return acc
  }, {}))
}

fn.lerPasta(caminho)
  .then(arquivos => fn.elementosTerminadosCom(arquivos, '.srt'))
  .then(caminhos => fn.lerArquivos(caminhos))
  .then(fn.mesclarElementos)
  .then(fn.separarTextoPor('\n'))
  .then(fn.removerElementosSeVazio)
  .then(fn.removerElementosSeIncluir('-->'))
  .then(fn.removerElementosSeApenasNumeros)
  .then(fn.removerSimbolos(simbolos))
  .then(fn.mesclarElementos)
  .then(fn.separarTextoPor(' '))
  .then(fn.removerElementosSeVazio)
  .then(fn.removerElementosSeApenasNumeros)
  .then(fn.agruparElementos)
  .then(fn.ordenarPorAtributoNumerico('qtde', 'desc'))
  .then(console.log)
