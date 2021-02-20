const fs = require('fs')
const path = require('path')

const pathway = path.join(__dirname, 'data.txt')

function readFile (pathway) {
  return new Promise (resolve=>{
    fs.readFile(pathway, function(_, content) {
      resolve(content.toString())
    })
  })
}

readFile(pathway).then(content => console.log(content))