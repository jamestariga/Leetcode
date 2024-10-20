const findContentChildren = (g: number[], s: number[]): number => {
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)

  let left: number = 0
  let right: number = 0
  let result: number = 0

  while (right < g.length && left < s.length) {
    if (s[left] >= g[right]) {
      result++
      right++
    }

    left++
  }

  return result
}

const g = [1, 2, 3]
const s = [1, 2]

console.log(findContentChildren(g, s))
