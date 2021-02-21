const { Observable } = require('rxjs')

const promise = new Promise(resolve => {
  resolve('Promise is pretty cool!')
})

promise.then(console.log)

const obs = new Observable(subscriber => {
  subscriber.next('Observer')
  subscriber.next('is ')
  subscriber.next('pretty ')
  setTimeout(() => {
    subscriber.next('cool!')
    subscriber.complete()
  }, 1000)
})

obs.subscribe(console.log)
obs.subscribe(text => console.log(text.toUpperCase()))