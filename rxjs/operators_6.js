const { from, Observable } = require('rxjs')

function createPipeableOperator (operator) {
    return function (source) {
        return new Observable (subscriber => {
          const sub = operator(subscriber)
          source.subscribe({
            next: sub.next,
            error: sub.error || ((e) => subscriber.error(e)),
            complete: sub.complete || (() => subscriber.complete())
          })
        })
      }
}

function first () {
  return createPipeableOperator((subscriber) => ({
    next (value) {
      subscriber.next(value)
      subscriber.complete()
    },
    complete () {
      
    }
  }))

  //   return createPipeableOperator((subscriber, v) => {
  //     subscriber.next(v)
  //     subscriber.complete()
  //   })

}


function none () {
  return createPipeableOperator((subscriber) => ({
    next (value) {
      subscriber.complete()
    }
  }))
}


function last () {
  let last
  return createPipeableOperator((subscriber) => ({
    next (v) {
      last = v
    },
    complete () {
      if (last !== undefined) {
        subscriber.next(last)
      }
      subscriber.complete()
    }
  }))
  
  // return function (source) {
  //   return new Observable(subscriber => {
  //     let last
  //     source.subscribe({
  //       next (v) {
  //         last = v
  //       },
  //       complete () {
  //         if (last !== undefined) {
  //           subscriber.next(last)
  //         }
  //         subscriber.complete()
          
  //       }
  //     })
  //   })
  // }
}

from([1, 2, 3, 4, 5])
  .pipe(
    // first(),
    // none(),
    last()
  )
  .subscribe(console.log)