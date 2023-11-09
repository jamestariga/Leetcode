const longestPalindrome = (s: string): string => {
  let longest: string = ''

  const isPalindrome = (left: number, right: number): string => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--
      right++
    }

    return s.substring(left + 1, right)
  }

  for (let i = 0; i < s.length; i++) {
    // Odd length
    let odd = isPalindrome(i, i)
    // Even length
    let even = isPalindrome(i, i + 1)

    if (odd.length > longest.length) {
      longest = odd
    }

    if (even.length > longest.length) {
      longest = even
    }
  }

  return longest
}

// @ts-ignore
const s = 'babad'

console.log(longestPalindrome(s))
