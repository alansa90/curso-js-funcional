function gerarNumerosEntre(min, max, numerosProibidos) {
  if(min > max ) {
    [max, min] = [min, max]
  }

  return new Promise((resolve, reject) => {
    const fator = (max - min) + 1
    const aleatorio =  parseInt(Math.random() * fator) + min
    if(numerosProibidos.includes(aleatorio)) {
      reject('número repetido')
    }
    resolve(aleatorio)
  })
}

async function gerarMegaSena(qtdeNumeros, tentativas= 1) {
  try {
    const numeros = []
    for (let i of Array(qtdeNumeros).fill()) {
      numeros.push(await gerarNumerosEntre(1, 60, numeros))
    }
    return numeros
  }
  catch (e) {
    if (tentativas > 100) {
      throw 'Erro!'
    }
    else {
      return gerarMegaSena(qtdeNumeros, tentativas + 1)
    }
  }
}

gerarMegaSena(6)
  .then(console.log)
  .catch(console.log)