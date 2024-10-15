const minWindow = (s: string, t: string): string => {
  if (s.length < t.length) return ''

  const freqMap: { [key: string]: number } = {}

  for (let i = 0; i < t.length; i++) {
    if (t[i] in freqMap) {
      freqMap[t[i]]++
    } else {
      freqMap[t[i]] = 1
    }
  }

  const sHashMap: { [key: string]: number } = {}
  let needed: number = Object.keys(freqMap).length
  let matched: number = 0
  let left: number = 0
  let minLeft: number = 0
  let minRight: number = s.length

  for (let right = 0; right < s.length; right++) {
    if (s[right] in sHashMap) {
      sHashMap[s[right]]++
    } else {
      sHashMap[s[right]] = 1
    }

    if (s[right] in freqMap && sHashMap[s[right]] === freqMap[s[right]]) {
      matched++
    }

    while (matched === needed) {
      if (right - left + 1 < minRight - minLeft + 1) {
        minRight = right
        minLeft = left
      }

      if (s[left] in freqMap && sHashMap[s[left]] === freqMap[s[left]]) {
        matched--
      }

      sHashMap[s[left]]--

      if (sHashMap[s[left]] === 0) {
        delete sHashMap[s[left]]
      }

      left++
    }
  }

  return minRight - minLeft + 1 > s.length ? '' : s.slice(minLeft, minRight + 1)
}

const s = 'ADOBECODEBANC'
const t = 'ABC'

console.log(minWindow(s, t))
