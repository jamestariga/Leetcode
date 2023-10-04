const isSubsequence = (s: string, t: string) => {
  if (s === t) return true

  if (s.length > t.length) return false

  // Initialized the pointer for s
  let left = 0

  for (let right = 0; right < t.length; right++) {
    if (s[left] === t[right]) left++
    if (left === s.length) return true
  }

  return false
}

const s = 'ab'
const t = 'baab'

console.log(isSubsequence(s, t))
