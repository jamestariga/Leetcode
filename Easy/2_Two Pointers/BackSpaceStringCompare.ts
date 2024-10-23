// O(n) time and O(n) space
// const backspaceCompare = (s: string, t: string): boolean => {
//   const sArr: string[] = []
//   const tArr: string[] = []

//   for (let str of s) {
//     if (str !== '#') {
//       sArr.push(str)
//     } else {
//       sArr.pop()
//     }
//   }

//   for (let str of t) {
//     if (str !== '#') {
//       tArr.push(str)
//     } else {
//       tArr.pop()
//     }
//   }

//   return sArr.join('') === tArr.join('')
// }

// O(n) time and O(1) space
const backspaceCompare = (s: string, t: string): boolean => {
  let sIndex: number = s.length - 1
  let tIndex: number = t.length - 1

  while (sIndex >= 0 || tIndex >= 0) {
    if (s[sIndex] === '#') {
      let skips: number = 1

      while (skips >= 0) {
        sIndex--
        if (s[sIndex] === '#') {
          skips++
        } else {
          skips--
        }
      }
    }

    if (t[tIndex] === '#') {
      let skips: number = 1

      while (skips >= 0) {
        tIndex--
        if (t[tIndex] === '#') {
          skips++
        } else {
          skips--
        }
      }
    }

    if (s[sIndex] !== t[tIndex]) return false

    sIndex--
    tIndex--
  }

  return true
}

const s = 'ab##'
const t = 'c#d#'

console.log(backspaceCompare(s, t))
