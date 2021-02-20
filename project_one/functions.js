const fs = require('fs')
const path = require('path')

function composition(...fns) {
    return function(value) {
        return fns.reduce(async (acc, fn) => {
            if(Promise.resolve(acc) === acc) {
                return fn(await acc)
            } else {
                return fn(acc)
            }
        }, value)
    }
}

function readPath (pathWay) {
    return new Promise((resolve, reject) => {
        try {
            const files = fs.readdirSync(pathWay).map(file => {
                return path.join(pathWay, file)
            })
            resolve(files)
        } catch (e) {
            reject(e)
        }
    })
}

function readFile (file) {
    return new Promise((resolve, reject) => {
        try {
            const content = fs.readFileSync(file, { encoding: 'utf-8' })
            resolve(content.toString())
        } catch (e) {
            reject(e)
        }
    })
}

function readFiles (files) {
    return Promise.all(files.map(file => readFile(file)))
}

function elementsEndingWith (textualPattern) {
    return function (array) {
        return array.filter(el => el.endsWith(textualPattern))
    }
}

function removeElementsIfEmpty (array) {
    return array.filter(el => el.trim())
}

function removeElementsIfInclude (textualPattern) {
    return function (array) {
        return array.filter(el => !el.includes(textualPattern))
    }
}

function removeElementsIfOnlyNumbers (array) {
    return array.filter(el => {
        const num = parseInt(el.trim())
        return num !== num
    })
}

function removeSymbols (symbols) {
    return function (array) {
        return array.map(el => {
            return symbols.reduce((acc, symbols) => {
                return acc.split(symbols).join('')
            }, el)
        })
    }
}

function mixElements (array) {
    return array.join(' ')
}

function splitTextBy (symbols) {
    return function (text) {
        return text.split(symbols)
    }
}

function groupElements (words) {
    return Object.values(words.reduce((acc, word) => {
        const el = word.toLowerCase()
        const qte = acc[el] ? acc[el].qte + 1 : 1
        acc[el] = { element: el, qte }
        return acc
    }, {}))
}

function orderByAttributeNumeric (attr, order = 'asc') {
    return function (array) {
        const asc = (o1, o2) => o1[attr] - o2[attr]
        const desc = (o1, o2) => o2[attr] - o1[attr]
        return [...array].sort(order === 'asc' ? asc : desc)
    }
}

module.exports = {
    composition,
    readPath,
    readFile,
    readFiles,
    elementsEndingWith,
    removeElementsIfEmpty,
    removeElementsIfInclude,
    removeElementsIfOnlyNumbers,
    removeSymbols,
    mixElements,
    splitTextBy,
    groupElements,
    orderByAttributeNumeric
}