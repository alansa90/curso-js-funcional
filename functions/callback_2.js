const fs = require('fs')
const path = require('path')

const pathway = path.join(__dirname, 'data.txt')

function showContent (err, content) {
  console.log(content.toString())
}


console.log('Start...')
fs.readFile(pathway, (err, data) => console.log(data.toString()))
fs.readFile(pathway, showContent)
console.log('End...')

console.log('Start sync...')
const content = fs.readFileSync(pathway)
console.log(content.toString())
console.log('End sync...')