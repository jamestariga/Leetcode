const firstPalindrome = (words: string[]): string => {
  for (let i = 0; i < words.length; i++) {
    let currWord: string[] = words[i].split('')
    let left: number = 0
    let right: number = currWord.length - 1

    while (left < right) {
      if (currWord[left] === currWord[right]) {
        left++
        right--
      } else {
        break
      }
    }

    if (left >= right) return words[i]
  }

  return ''
}

const words = ['abc', 'car', 'ada', 'racecar', 'cool']
console.log(firstPalindrome(words))
