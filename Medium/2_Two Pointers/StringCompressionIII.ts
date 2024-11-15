// function compressedString(word: string): string {
//   let left: number = 0
//   let right: number = 1
//   let result: string = ''

//   if (word.length < 2) {
//     return String(right) + word[0]
//   }

//   while (left < word.length) {
//     if (word[left] === word[right]) {
//       if (right - left === 9) {
//         result += String(right - left) + word[left]
//         left = right
//       }
//       right++
//     } else {
//       result += String(right - left) + word[left]
//       left = right
//     }
//   }

//   return result
// }

function compressedString(word: string): string {
  let comp = ''
  let count = 1

  for (let i = 0; i < word.length; i++) {
    if (word[i] == word[i + 1] && count < 9) {
      count++
      continue
    }

    comp += count + word[i]
    count = 1
  }
  return comp
}

const word = 'aaaaaaaaaaaaaabb'

console.log(compressedString(word))
