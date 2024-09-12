const canConstruct = (ransomNote: string, magazine: string): boolean => {
  const hashMap: { [key: string]: number } = {}

  for (const note of ransomNote) {
    if (note in hashMap) {
      hashMap[note]++
    } else {
      hashMap[note] = 1
    }
  }

  for (const note of magazine) {
    if (note in hashMap) {
      if (hashMap[note] === 1) {
        delete hashMap[note]
      } else {
        hashMap[note]--
      }
    }
  }

  return Object.keys(hashMap).length === 0
}

let ransomNote = 'a'
let magazine = 'b'

console.log(canConstruct(ransomNote, magazine))
