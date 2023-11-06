const checkInclusion = (s1: string, s2: string): boolean => {
  if (s1.length > s2.length) return false

  const hashMap: { [key: string]: number } = {}
  const windowSize = s1.length

  // Frequency hashmap
  for (let s of s1) {
    hashMap[s] = (hashMap[s] || 0) + 1
  }

  let size = Object.keys(hashMap).length
  let j = 0

  for (let i = 0; i < s2.length; i++) {
    // Decrement the frequency upon encountering a character from the hashmap
    if (s2[i] in hashMap) {
      hashMap[s2[i]]--

      // When one of the characters in the hashmap is at 0 frequency, we decrement the size
      if (hashMap[s2[i]] === 0) {
        size--
      }
    }

    // When size is 0, we want to check if the permutation exist
    while (size === 0) {
      if (i - j + 1 === windowSize) return true

      if (s2[j] in hashMap) {
        hashMap[s2[j]]++
        if (hashMap[s2[j]] > 0) {
          size++
        }
      }

      j++
    }
  }

  return false
}

// const s1 = 'ky'
// const s2 = 'ainwkckifykxlribaypk'
const s1 = 'ab'
const s2 = 'eidboaoo'

console.log(checkInclusion(s1, s2))
