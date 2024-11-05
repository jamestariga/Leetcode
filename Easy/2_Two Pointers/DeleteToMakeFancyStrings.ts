// O(n) Time and O(1) Space
function makeFancyString(s: string): string {
  let left: number = 0
  let result: string = ''

  for (let right = 0; right < s.length; right++) {
    if (s[left] === s[right] && right - left > 1) {
      continue
    }

    if (s[left] !== s[right]) {
      left = right
    }

    result += s[right]
  }

  return result
}

// O(n) Time and O(1) Space
// function makeFancyString(s: string): string {
//   let count: number = 1
//   let newString: string = ''
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === s[i - 1] && count < 2) {
//       count++
//       newString += s[i]
//     } else if (s[i] !== s[i - 1]) {
//       count = 1
//       newString += s[i]
//     }
//   }
// }

// O(n) Time and O(1) Space
// function makeFancyString(s: string): string {
//   let left = 2
//   const sArr = s.split('')

//   for (let right = 2; right < sArr.length; right++) {
//     if (sArr[right] !== sArr[left - 1] || sArr[right] !== sArr[left - 2]) {
//       sArr[left] = sArr[right]
//       left++
//     }
//   }

//   return sArr.slice(0, left).join('')
// }

const s = 'Leeeetcodeeee'

console.log(makeFancyString(s))
