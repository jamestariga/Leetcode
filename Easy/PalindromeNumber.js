const x = 121
const y = 101

/**
 * @param {number} x
 * @return {boolean}
 */
// const isPalindrome = (x) => {
//   if (x < 0) return false

//   const reversedNum = x.toString().split('').reverse().join('')

//   return reversedNum === x.toString()
// }

// console.log(isPalindrome(y))

const isPalindrome = (x) => {
  let final = 0
  let num = x

  while (num > 0) {
    const last = num % 10

    console.log(last)

    final = final * 10 + last

    num = Math.floor(num / 10)
  }

  return x === final
}

console.log(isPalindrome(y))
