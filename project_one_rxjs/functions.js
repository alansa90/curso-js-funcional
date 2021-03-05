const { create } = require('domain')
const fs = require('fs')
const path = require('path')
const { Observable } = require('rxjs')


function readPath (pathWay) {
    return new Observable ((subscriber) => {
        try {
            fs.readdirSync(pathWay).forEach(file => {
                subscriber.next(path.join(pathWay, file))  
            })
            subscriber.complete()
        } catch (e) {
            subscriber.error(e)
        }
    })
}

function readFile () {
    return createPipeableOperator((subscriber) => ({
        next (file) {
          try {
            const content = fs.readFileSync(file, { encoding: 'utf-8' })
            subscriber.next(content)
            subscriber.complete()
          }
          catch (e) {
              subscriber.error(e)
          }
            
        } 
    }))
}

function elementsEndingWith (textualPattern) {
    return createPipeableOperator ((subscriber) => ({
        next (text) {
            if (text.endsWith(textualPattern)) {
                subscriber.next(text)
            }
        }
    }))
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
    return createPipeableOperator ((subscriber) => ({
        next (text) {
            text.split(symbols).forEach((part) => {
                subscriber.next(part)
            })
            subscriber.complete()
        }
    }))
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

function createPipeableOperator (operator) {
    return function (source) {
        return new Observable (subscriber => {
          const sub = operator(subscriber)
          source.subscribe({
            next: sub.next,
            error: sub.error || ((e) => subscriber.error(e)),
            complete: sub.complete || (() => subscriber.complete())
          })
        })
      }
}

module.exports = {
    readPath,
    readFile,
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