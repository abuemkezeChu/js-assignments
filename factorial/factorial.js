'use strict'

// const factorial = (n) => {
//   let result = 1
//   if (n === 0 || n === 1) {
//     return 1
//   }
//   for (let i = (0 + 1); i <= n; i++) {
//     result *= i
//   }
//   return result
// }

// console.log(factorial(6))

const factorial = (n) => {
  let result = 1
  if (n === 0 || n === 1) {
    return 1
  }
  for (let i = n; i >= 1; i--) {
    result *= i
  }
  return result
}

console.log(factorial(3))