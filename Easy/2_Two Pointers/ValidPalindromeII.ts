const validPalindrome = (s: string) => {
  let left = 0
  let right = s.length - 1

  while (left < right) {
    if (s.charAt(left) !== s.charAt(right)) {
      return (
        checkPalindrome(s, left + 1, right) ||
        checkPalindrome(s, left, right - 1)
      )
    }

    left++
    right--
  }

  return true
}

const checkPalindrome = (s: string, left: number, right: number) => {
  while (left < right) {
    if (s.charAt(left) === s.charAt(right)) {
      left++
    } else {
      return false
    }
    right--
  }

  return true
}

// Big-O = O(n)
// Space = O(n)

// @ts-ignore
const s = 'abca'
// const s = 'abca'
// const s = 'abc'
// const s = 'deeee'
console.log(validPalindrome(s))
