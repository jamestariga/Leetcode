// Solution 1:
// const isAnagram = (str1: string, str2: string) => {
//   if (str1.length !== str2.length) return false

//   return reorder(str1) === reorder(str2)
// }

// const reorder = (str: string) => {
//   return str
//     .split('')
//     .sort((a, b) => a.localeCompare(b))
//     .join('')
// }

// Big-O = O(nlogn)

// Solution 2:
// const isAnagram = (s, t) => {
//   if (s.length !== t.length) return false

//   let sMap = new Map()

//   for (let i = 0; i < s.length; i++) {
//     let value = sMap.get(s.charAt(i))

//     if (value) {
//       value++
//       sMap.set(s.charAt(i), value)
//     } else {
//       sMap.set(s.charAt(i), 1)
//     }
//   }

//   for (let i = 0; i < t.length; i++) {
//     let value = t.charAt(i)

//     let count = sMap.get(value)

//     if (count) {
//       if (count === 1) {
//         sMap.delete(value)
//       } else {
//         count--
//         sMap.set(value, count)
//       }
//     }
//   }

//   return sMap.size === 0
// }

// Big-O = O(n)
// Space Complexity = O(n)

// Solution 3:
// const isAnagram = (s: string, t: string): boolean => {
//   if (s.length !== t.length) return false

//   let mapS = {}
//   let mapT = {}

//   for (let i = 0; i < s.length; i++) {
//     if (mapS.hasOwnProperty(s[i])) {
//       mapS[s[i]]++
//     } else {
//       mapS[s[i]] = 1
//     }

//     if (mapT.hasOwnProperty(t[i])) {
//       mapT[t[i]]++
//     } else {
//       mapT[t[i]] = 1
//     }
//   }

//   const sortedS = Object.entries(mapS).sort()
//   const sortedT = Object.entries(mapT).sort()

//   return JSON.stringify(sortedS) === JSON.stringify(sortedT)
// }

// Time Complexity: O(n)
// Space Complexity: O(n)

const str1 = 'anagram'
const str2 = 'nagaram'

console.log(isAnagram(str1, str2))
