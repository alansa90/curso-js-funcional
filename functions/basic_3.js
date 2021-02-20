//arrow function

const merryChristmas  = () => console.log('Merry Christmas')

merryChristmas()    

const greeting = (name) => 'Speak ' + name + '!!!'
console.log(greeting('Alan'))

// const greeting = name => 'Speak ' + name + '!!!'
// console.log(greeting('Alan'))

// const greeting = name => `Speak ${name}, blz!?!`
// console.log(greeting('Alan'))

const sum = (...numbers) => {
  console.log(Array.isArray(numbers))
  let total = 0
  for (let n of numbers) {
    total += n
  }
  return total
}


// const sum = (numbers) => {
//   let total = 0
//   for (let n of numbers) {
//     total += n
//   }
//   return total
// }

// const sum = (numbers) => {
//   let total = 0
//   for (let i = 0; i< numbers.length; i += 1) {
//     total = total + numbers[i]
//   }
//   return total
// }

console.log(sum(1,2,5,7,9,2,3,4,6))

const subtraction = (a, b) => a - b
console.log(5, 3)

const potency = base => exp => Math.pow(base, exp)
console.log(potency(2)(8))

//this
Array.prototype.log = function () {
  console.log(this)
}

const numbers = [1, 2, 3]
numbers.log()

Array.prototype.last = function () {
  console.log(this[this.length - 1])
}

const numbersU = [1, 2, 3]
numbers.last()