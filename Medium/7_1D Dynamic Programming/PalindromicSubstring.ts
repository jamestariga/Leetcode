const countSubstrings = (s: string): number => {
  let result: number = 0
  let counter: number = 0

  const isPalindrome = (left: number, right: number) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      counter++
      left--
      right++
    }

    return counter
  }

  for (let i = 0; i < s.length; i++) {
    let odd = isPalindrome(i, i)
    let even = isPalindrome(i, i + 1)

    if (odd > even) {
      result = odd
    } else {
      result = even
    }
  }

  return result
}

// @ts-ignore
const s = 'aaa'
console.log(countSubstrings(s))
