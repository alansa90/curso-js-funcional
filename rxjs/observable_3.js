// Challenge
// Create a stream the numbers
// between min and max with observable

const { Observable, noop } = require('rxjs')

function between (min, max) {
  return new Observable(subscriber => {
    Array(max - min).fill().map((_, i) => {
      subscriber.next(min + i)
    })
    // for (let i = min; i <= max; i += 1) {
    //   subscriber.next(i)
    // }
    subscriber.complete()
  })
}

between(4, 10) 
  .subscribe(
    number => console.log(`Number = ${number}`),
    noop,
    () => console.log('Fim!')
  )