// The two types

//  1. Creation operators
const { of } = require('rxjs')

//  2. Chain operators (pipeable op.)
const { last, map } = require('rxjs/operators')

of(1, 2, 'ana', false, 'last')
  .pipe(
    last(),
    map( v => v[0]),
    map( v => `The found letter was: ${v}`)
  )
  .subscribe(function (value) {
    console.log(value)
  })