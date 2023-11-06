const lengthOfLongestSubstring = (s: string): number => {
  let set = new Set<string>()
  let left = 0
  let result = 0

  for (let i = 0; i < s.length; i++) {
    while (set.has(s[i])) {
      set.delete(s[left])
      left++
    }
    set.add(s[i])

    let curr = i - left + 1

    result = Math.max(result, curr)
  }

  return result
}

// @ts-ignore
const s = 'abcabcbb'
// const s = 'bbbbb'
// const s = 'pwwkew'
console.log(lengthOfLongestSubstring(s))
