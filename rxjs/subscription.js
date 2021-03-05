// esperar 3000
// gerar números de 500
const { timer } = require('rxjs')

const obs = timer(3000,500)

const sub1 = obs.subscribe(num => {
  console.log(`#1 Gerou o número: ${num}`)
})

const sub2 = obs.subscribe(num => {
  console.log(`#2 Gerou o número: ${num}`)
})

setTimeout(() => {
  sub1.unsubscribe()
  sub2.unsubscribe()
}, 10000)