function generateNumbersBetween(min, max, tempo) {
  if(min > max ) {
    [max, min] = [min, max]
  }

  return new Promise(resolve => {
    setTimeout(function(){
      const factor = (max - min) + 1
      const random =  parseInt(Math.random() * factor) + min
      resolve(random)
    },tempo)
  })
}

console.time('promise')
function generateSeveral () {
  return Promise.all([
    generateNumbersBetween(1, 60, 1000),
    generateNumbersBetween(1, 60, 500),
    generateNumbersBetween(1, 60, 3000),
    generateNumbersBetween(1, 60, 4000),
    generateNumbersBetween(1, 60, 100),
    generateNumbersBetween(1, 60, 1500)
  ])
}

generateSeveral()
  .then(console.log)
  .then(() => console.timeEnd('promise'))