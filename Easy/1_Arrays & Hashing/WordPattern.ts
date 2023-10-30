const wordPattern = (pattern: string, s: string): boolean => {
  const sArr = s.split(' ')

  if (pattern.length !== sArr.length) return false

  let patternMap = new Map()
  let sMap = new Map()

  for (let i = 0; i < pattern.length; i++) {
    if (
      (patternMap.has(pattern[i]) && patternMap.get(pattern[i]) !== sArr[i]) ||
      (sMap.has(sArr[i]) && sMap.get(sArr[i]) !== pattern[i])
    ) {
      return false
    }

    patternMap.set(pattern[i], sArr[i])
    sMap.set(sArr[i], pattern[i])
  }

  return true
}

const pattern = 'abba'
// @ts-ignore
const s = 'dog cat cat dog'
console.log(wordPattern(pattern, s))
