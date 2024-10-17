const minimumSteps = (s: string): number => {
  let left: number = 0
  let total: number = 0

  for (let right = 0; right < s.length; right++) {
    if (s.charAt(right) === '0') {
      total += right - left
      left++
    }
  }

  return total
}

const s = '010010'

console.log(minimumSteps(s))
