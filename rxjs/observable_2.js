const { Observable } = require('rxjs')

const obs = Observable.create(subscriber => {
  subscriber.next('RxJS')
  subscriber.next('is')
  subscriber.next('very')
  subscriber.next('powerful')

  if (Math.random() < 0.5) {
    subscriber.complete()
  }
  else {
    subscriber.error('What problem!?!')
  }
})

// obs.subscribe(
//   value => console.log(`Value: ${value}`),
//   error => console.log(`Error: ${error}`),
//   () => console.log('Fim!')
// )

obs.subscribe({
  next (value) {
    console.log(`Value: ${value}`)
  },
  error (error) {
    console.log(`Error: ${error}`)
  },
  complete () {
    console.log('Fim!')
  } 
})