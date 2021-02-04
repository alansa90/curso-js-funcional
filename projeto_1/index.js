const path = require('path')
const fn = require('./functions')

const caminho = path.join(__dirname, '..', 'dados', 'legendas')

fn.lerPasta(caminho)
  .then(arquivos => fn.elementosTerminadosCom(arquivos, '.srt'))
  .then(caminhos => fn.lerArquivos(caminhos))
  .then(console.log)
