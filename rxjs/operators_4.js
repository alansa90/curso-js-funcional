const { from, Observable } = require('rxjs')

function first () {
  return function (source) {
    return new Observable (subscriber => {
      source.subscribe({
        next (v) {
          subscriber.next(v)
          subscriber.complete()
        }
      })
    })
  }

}


function none () {
  return function (source) {
    return new Observable (subscriber => {
      let last
      source.subscribe({
        next (v) {
          subscriber.complete()
        }
      })
    })
  }
}


function last () {
  return function (source) {
    return Observable.create(subscriber => {
      let last
      source.subscribe({
        next (v) {
          last = v
        },
        complete () {
          if (last !== undefined) {
            subscriber.next(last)
          }
          subscriber.complete()
          
        }
      })
    })
  }
}

from([1, 2, 3, 4, 5])
  .pipe(
    // first(),
    // none(),
    last()
  )
  .subscribe(console.log)