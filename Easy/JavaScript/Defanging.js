const ip = '1.1.1.1'

const defangIPaddr = (address) => {
  return address
    .split('')
    .map((y) => {
      return y === '.' ? `[${y}]` : y
    })
    .join('')
}

// const defangIPaddr = (address) => {
//   let x = address.split('')

//   let func = x
//     .map((y) => {
//       if (y === '.') {
//         return `[${y}]`
//       } else {
//         return y
//       }
//     })
//     .join('')

//   return func
// }

console.log(defangIPaddr(ip))
