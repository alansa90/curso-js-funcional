const fs = require('fs')
const path = require('path')

function lerPasta (caminho) {
  return new Promise ((resolve, reject) => {
    try {
      let arquivos = fs.readdirSync(caminho)
      arquivos = arquivos.map(arquivo => path.join(caminho, arquivo))
      resolve(arquivos)
    }
    catch (e) {
      reject(e)
    }
  })
}

function elementosTerminadosCom (array, padraoTextual) {

  return array.filter(item => item.endsWith(padraoTextual))

}

function lerArquivo (caminho) {
  return new Promise((resolve,reject) => {
    try {
      const conteudo = fs.readFileSync(caminho, { encoding: 'utf-8'})
      resolve(conteudo.toString())
    }
    catch (e) {
      reject(e)
    }
  })
}

function lerArquivos (caminhos) {
  return Promise.all(caminhos.map(caminho => lerArquivo(caminho)))
}

function removerElementosSeVazio (array) {
  return array.filter(item => item.trim())
}

function removerElementosSeIncluir (padraoTextual, array) {
  return function (array) {
    return array.filter(item => !item.includes(padraoTextual))
  }
}

function removerElementosSeApenasNumeros (array) {
  return array.filter(item => {
    const num = parseInt(item.trim())
    return num !== num
  })
}

function removerSimbolos (simbolos, array) {
  return function (array) {
    return array.map(item => {
      let newText = item
      simbolos.forEach(simbolo => {
        newText = newText.split(simbolo).join('')
      })
      return newText
    })
  }
}

function mesclarElementos (array)  {
  return array.join(' ')
}

function separarTextoPor (simbolo) {
  return function (texto) {
    return texto.split(simbolo)
  }
}

function agruparElementos (palavras) {
  return Object.values(palavras.reduce((acc, palavra) => {
    const p = palavra.toLowerCase()
    const qtde = acc[p] ? acc[p].qtde + 1 : 1
    acc[p] = { elemento: p, qtde }
    return acc
  }, {}))
}

function ordenarPorAtributoNumerico (attr, ordem = 'asc') {
  return function (array) {
    const asc = (o1, o2) => o1[attr] - o2[attr]
    const desc = (o1, o2) => o2[attr] - o1[attr]
    return array.sort(ordem === 'asc' ? asc : desc)
  }
} 
module.exports = {
  lerPasta,
  elementosTerminadosCom,
  lerArquivos,
  removerElementosSeVazio,
  removerElementosSeIncluir,
  removerElementosSeApenasNumeros,
  removerSimbolos,
  mesclarElementos,
  separarTextoPor,
  agruparElementos,
  ordenarPorAtributoNumerico
}