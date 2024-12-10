const findChampion = (n: number, edges: number[][]): number => {
  const incoming: number[] = new Array(n).fill(0)

  for (const [u, v] of edges) {
    incoming[v] += 1
  }

  const champion: number[] = []

  for (let i = 0; i < n; i++) {
    if (incoming[i] === 0) {
      champion.push(i)
    }
  }

  return champion.length === 1 ? champion[0] : -1
}

const n = 3
const edges = [
  [0, 1],
  [1, 2],
]
console.log(findChampion(n, edges))
