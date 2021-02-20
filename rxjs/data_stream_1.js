function createNumbers (fn) {
  return {
    start (fn, interval = 1000) {
      let num = 0
      const i = setInterval(() => {
      fn(num += 1)
      }, interval)

      return {
        stop () {
          clearInterval(i)
        }
      }
    }
  }
}


const temp1 = createNumbers()
const exec1 = temp1.start(number => {
  console.log(`#1: ${number * 2}`)
}, 1000)


const temp2 = createNumbers()
const exec2 = temp2.start(a => {
  console.log(`#2: ${a + 100}`)
}, 2000)

setTimeout(() => {
  exec1.stop()
  exec2.stop()
}, 10000)