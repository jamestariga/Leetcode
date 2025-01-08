function maxScore(s: string): number {
  let one: number = 0
  let zeroes: number = 0
  let max: number = -Infinity

  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === '1') {
      one++
    } else {
      zeroes++
    }

    max = Math.max(max, zeroes - one)
  }

  if (s[s.length - 1] === '1') one++

  return max + one
}
