const canMakeSubsequence = (str1: string, str2: string): boolean => {
  let str2Index: number = 0
  const str2Target: number = str2.length

  for (const curr of str1) {
    if (
      str2Index < str2Target &&
      (str2.charCodeAt(str2Index) - curr.charCodeAt(0) + 26) % 26 <= 1
    ) {
      str2Index++
    }
  }

  return str2Index === str2Target
}

const str1 = 'abc'
const str2 = 'ad'

console.log(canMakeSubsequence(str1, str2))
