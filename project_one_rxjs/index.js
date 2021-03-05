const path = require('path')
const fn = require('./functions')

const newPath = path.join(__dirname, '..', 'data', 'legends')
const symbols = [
  '.', '?', '!', '-', ',', '"', '♪', '_', '<i>', '</i>', '\r', '[', ']', '(', ')'
]

fn.readPath(newPath)
  .pipe(
    fn.elementsEndingWith('.srt'),
    fn.readFile(),
    fn.splitTextBy('\n')
  )
  .subscribe(console.log)

// fn.readPath(newPath)
//   .then(fn.elementsEndingWith('.srt'))
//   .then(fn.readFiles)
//   .then(fn.mixElements)
//   .then(fn.splitTextBy('\n'))
//   .then(fn.removeElementsIfEmpty)
//   .then(fn.removeElementsIfInclude('-->'))
//   .then(fn.removeElementsIfOnlyNumbers)
//   .then(fn.removeSymbols(symbols))
//   .then(fn.mixElements)
//   .then(fn.splitTextBy(' '))
//   .then(fn.removeElementsIfEmpty)
//   .then(fn.removeElementsIfOnlyNumbers)
//   .then(fn.groupElements)
//   .then(fn.orderByAttributeNumeric('qte', 'desc'))
//   .then(console.log)
