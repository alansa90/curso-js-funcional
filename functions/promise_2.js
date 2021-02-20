// setTimeout(function(){
//   console.log('Execute callback...')
//   setTimeout(function(){
//     console.log('Execute callback...')
//     setTimeout(function(){
//       console.log('Execute callback...')
//     },2000)
//   },2000)
// },2000)

function waitFor(time = 2000) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log('Execute promise...')
      resolve()
    }, time)
  })
}

waitFor()
  .then(() => waitFor())
  .then(waitFor)