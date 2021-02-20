let a = 1
console.log(a)

let p = new Promise(function(resolve, reject) {
  resolve(3)
})

p.then((value) => console.log(value))

/***** */

p = new Promise(function(resolve) {
  resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

p
  .then(value => value[0])
  .then(first => first[0])
  .then(letter => letter.toLowerCase())
  .then(lowerCase => console.log('No function', lowerCase))

/****** */  

const firstElement = array => array[0]

const firstLetter = string => string[0]

let lowerCase = letter => letter.toLowerCase()
p
  .then(firstElement)
  .then(firstLetter)
  .then(lowerCase)
  //.then(v => console.log(v))
  .then(console.log)