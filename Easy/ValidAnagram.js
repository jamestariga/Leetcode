// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:

// Input: s = "rat", t = "car"
// Output: false

//Solution 2

// const isAnagram = (str1, str2) => {
//   if (str1.length !== str2.length) {
//     return false
//   }

//   let str1Obj = {}
//   let str2Obj = {}

//   for (let i = 0; i < str1.length; i++) {
//     str1Obj[str1[i]] = (str1Obj[str1[i]] || 0) + 1
//     str2Obj[str2[i]] = (str2Obj[str2[i]] || 0) + 1
//   }

//   for (let key in str1Obj) {
//     if (str1Obj[key] !== str2Obj[key]) {
//       return false
//     }
//   }

//   return true
// }

/**
 * We create two objects, one for each string, and then we compare the two objects to see if they have
 * the same keys and values.
 * @param str1 - "anagram"
 * @param str2 - "cinema"
 * @returns A boolean value.
 */

const isAnagram = (str1, str2) => {
  let x = {}
  let y = {}

  if (str1.length !== str2.length) return false

  str1.split('').forEach((s) => {
    x[s] ? x[s]++ : (x[s] = 1)
  })
  str2.split('').forEach((t) => {
    y[t] ? y[t]++ : (y[t] = 1)
  })

  for (let key in x) {
    if (x[key] !== y[key]) {
      return false
    }
  }

  return true
}

console.log(isAnagram('test', 'sett'))
