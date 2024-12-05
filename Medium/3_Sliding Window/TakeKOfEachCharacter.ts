function takeCharacters(s: string, k: number): number {
  const freq: { [key: string]: number } = { a: 0, b: 0, c: 0 }

  for (const c of s) {
    freq[c] = (freq[c] || 0) + 1
  }

  if (Math.min(freq['a'], freq['b'], freq['c']) < k) return -1

  let result: number = Infinity
  let left: number = 0

  for (let right = 0; right < s.length; right++) {
    freq[s[right]]--

    while (Math.min(freq['a'], freq['b'], freq['c']) < k) {
      freq[s[left]]++
      left++
    }

    result = Math.min(result, s.length - (right + 1 - left))
  }

  return result
}

const s = 'aabaaaacaabc'
const k = 2

console.log(takeCharacters(s, k))
