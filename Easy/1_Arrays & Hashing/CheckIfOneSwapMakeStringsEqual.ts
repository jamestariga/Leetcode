function areAlmostEqual(s1: string, s2: string): boolean {
  let s1Idx: number = 0
  let s2Idx: number = 0
  let diff: number = 0

  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      diff += 1

      if (diff > 2) {
        return false
      } else if (diff === 1) {
        s1Idx = i
      } else {
        s2Idx = i
      }
    }
  }

  return s1[s1Idx] === s2[s2Idx] && s1[s2Idx] === s2[s1Idx]
}

const s1 = 'bank'
const s2 = 'kanb'

console.log(areAlmostEqual(s1, s2))
