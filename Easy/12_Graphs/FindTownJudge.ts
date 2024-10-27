const findJudge = (n: number, trust: number[][]): number => {
  const incomingMap: { [key: number]: number } = {}
  const outgoingMap: { [key: number]: number } = {}

  for (let i = 1; i <= n; i++) {
    incomingMap[i] = 0
    outgoingMap[i] = 0
  }

  for (const [a, b] of trust) {
    incomingMap[b]++
    outgoingMap[a]++
  }

  for (let i = 1; i <= n; i++) {
    if (incomingMap[i] === n - 1 && outgoingMap[i] === 0) {
      return i
    }
  }

  return -1
}

const n = 3
const trust = [
  [1, 3],
  [2, 3],
  [3, 1],
]

console.log(findJudge(n, trust))
