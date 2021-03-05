const { of, Observable } = require('rxjs')

function endsWith(finalPart) {
  return function (data) {
    return new Observable(subscriber => {
      data.subscribe({
        next (value) {
          if(Array.isArray(value)){
            subscriber.next(
              value.filter(el => el.endsWith(finalPart))
            )
          }
          else if(value.endsWith(finalPart)) {
            subscriber.next(value)
          }
        },
        error (err) {
          subscriber.error(err)
        },
        complete () {
          subscriber.complete()
        }
      })
    })
  }
}

of(['Ana Silva', 'Maria Silva', 'Pedro Rocha'])
  .pipe(endsWith('Silva'))
  .subscribe(console.log)

