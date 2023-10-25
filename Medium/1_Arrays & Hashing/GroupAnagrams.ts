// const groupAnagrams = (strs: string[]): string[][] => {
//   let hashMap = {}

//   for (let s of strs) {
//     let s_sorted = s
//       .split('')
//       .sort((a, b) => a.localeCompare(b))
//       .join('')

//     if (s_sorted in hashMap) {
//       hashMap[s_sorted].push(s)
//     } else {
//       hashMap[s_sorted] = [s]
//     }
//   }

//   return Object.values(hashMap)
// }

const groupAnagrams = (strs: string[]): string[][] => {
  let hashMap = new Map<string, string[]>()

  for (let s of strs) {
    let s_sorted = s
      .split('')
      .sort((a, b) => a.localeCompare(b))
      .join('')

    if (hashMap.has(s_sorted)) {
      const value = hashMap.get(s_sorted)
      value.push(s)
      hashMap.set(s_sorted, value)
    } else {
      hashMap.set(s_sorted, [s])
    }
  }

  return Array.from(hashMap.values())
}

// Big-O = O(m * n)
// Space complexity = O(n)

// @ts-ignore
const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']

console.log(groupAnagrams(strs))
