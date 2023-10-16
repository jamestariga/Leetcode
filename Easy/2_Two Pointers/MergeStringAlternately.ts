const mergeAlternately = (word1: string, word2: string) => {
  let result = ''

  // Get the word with the longer length
  let maxLen = Math.max(word1.length, word2.length)

  for (let i = 0; i < maxLen; i++) {
    // Add each letter to the result index by index
    if (i < word1.length) result += word1[i]
    if (i < word2.length) result += word2[i]
  }

  return result
}

const word1 = 'abc'
const word2 = 'pqr'
const word3 = 'ab'
const word4 = 'pqrs'
const word5 = 'abc'
const word6 = 'efghijk'
console.log(mergeAlternately(word3, word4))
