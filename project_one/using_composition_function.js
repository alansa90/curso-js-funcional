const path = require('path')
const fn = require('./functions')

const pathWay = path.join(__dirname, '..', 'data', 'legends')

const symbols = [
    '.', '?', '-', ',', '"', '♪',
    '_', '<i>', '</i>', '\r', '[', ']',
    '(', ')'
]

const mostUsedWords = fn.composition(
    fn.readPath,
    fn.elementsEndingWith('.srt'),
    fn.readFiles,
    fn.mixElements,
    fn.splitTextBy('\n'),
    fn.removeElementsIfEmpty,
    fn.removeElementsIfInclude('-->'),
    fn.removeElementsIfOnlyNumbers,
    fn.removeSymbols(symbols),
    fn.mixElements,
    fn.splitTextBy(' '),
    fn.removeElementsIfEmpty,
    fn.removeElementsIfOnlyNumbers,
    fn.groupElements,
    fn.orderByAttributeNumeric('qte', 'desc'),
)

mostUsedWords(pathWay)
    .then(console.log)
    