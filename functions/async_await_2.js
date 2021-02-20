function generateNumbersBetween(min, max, prohibitedNumbers) {
  if(min > max ) {
    [max, min] = [min, max]
  }

  return new Promise((resolve, reject) => {
    const factor = (max - min) + 1
    const random =  parseInt(Math.random() * factor) + min
    if(prohibitedNumbers.includes(random)) {
      reject('Repeated number')
    }
    resolve(random)
  })
}

async function generateMegaSeine(qdeNumbers, attempts= 1) {
  try {
    const Numbers = []
    for (let i of Array(qdeNumbers).fill()) {
      Numbers.push(await generateNumbersBetween(1, 60, Numbers))
    }
    return Numbers
  }
  catch (e) {
    if (attempts > 100) {
      throw 'Error!'
    }
    else {
      return generateMegaSeine(qdeNumbers, attempts + 1)
    }
  }
}

generateMegaSeine(6)
  .then(console.log)
  .catch(console.log)