const readLine = require('readline')

function getAnswer(asking) {
  const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  return new Promise(resolve => {
    rl.question(asking, resp => {
      resolve(resp)
      rl.close()
    })
  })
}

//Observer
function girlfriend () {
  console.log('N: Turn off the lights')
  console.log('N: Ask for silence')
  console.log('N: Surprise!!!!')

}

//Observer
function syndic (event) {
  console.log('S: Monitoring the noise!')
  console.log(`S: event -> ${event.resp}`)
  console.log(`S: event -> ${event.date.toDateString()}`)
}

//subject
async function doorkeeper (interested) {
  while (true) {
    const resp = await getAnswer('The boyfriend arrived? (y/N/q)')
    if (resp.toLowerCase() === 's') {
      // The observers are notified
      (interested || []).forEach(obs => obs({ resp, data: new Date}))
      break
    }
    else if (resp.toLowerCase() === 'q') {
      break
    }
  }
}

/*
  Function call -> records the two observers!
  The observers are: girlfriend and syndic
  The subject is the doorkeeper!
*/

doorkeeper([girlfriend, syndic])