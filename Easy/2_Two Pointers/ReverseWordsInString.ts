const reverseWords = (s: string): string => {
  const sArr: string[] = s.split(' ')
  let reversed: string[] = []

  for (let i = 0; i < sArr.length; i++) {
    let left: number = 0
    let right: number = sArr[i].length - 1

    let currArr: string[] = sArr[i].split('')

    while (left <= right) {
      let temp = currArr[left]
      currArr[left] = currArr[right]
      currArr[right] = temp
      left++
      right--
    }
    reversed.push(currArr.join(''))
  }

  return reversed.join(' ')
}

const s = "Let's take LeetCode contest"

console.log(reverseWords(s))
