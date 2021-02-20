function workOrNot (Value, chanceOfError) {
  return new Promise((resolve, reject) => {
    try {
      if(Math.random() < chanceOfError) {
        reject('An error has occurred!')
      }
      else {
          resolve(Value)
        }
    }
    catch (err) {
      reject(err)
    }
  })
}

workOrNot('Testing...', 0.1)
  .then(v => console.log(`Value: ${v}`))
  .catch(err => console.log(`Error: ${err}`))