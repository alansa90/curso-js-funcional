const { interval } = require('rxjs')

const createNumbers = interval(500)

const sub1 = createNumbers.subscribe(num => {
  console.log(Math.pow(2, num))
})

const sub2 = createNumbers.subscribe(console.log)

setTimeout(() => sub1.unsubscribe(), 8000)
setTimeout(() => sub2.unsubscribe(), 6000)