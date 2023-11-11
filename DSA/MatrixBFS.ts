// Q: Find the length of the shortest path from top left of the grid to the bottom right.

const bfs = (grid: number[][]) => {
  const visited = new Set()
  const row: number = grid.length
  const col: number = grid[0].length
  const queue: number[][] = [[0, 0]]

  visited.add('0-0')

  let length = 0

  while (queue.length > 0) {
    // take a snapshot of the length of the queue
    let queueLength = queue.length

    for (let i = 0; i < queueLength; i++) {
      let pair = queue.shift()
      let r = pair[0]
      let c = pair[1]

      if (r === row - 1 && c === col - 1) {
        return length
      }

      const directions: [number, number][] = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
      ]

      for (const [dr, dc] of directions) {
        const newR: number = r + dr
        const newC: number = c + dc
        const key: string = `${newR}-${newC}`
        if (
          newR < 0 ||
          newC < 0 ||
          newR === row ||
          newC === col ||
          visited.has(key) ||
          grid[newR][newC] === 1
        ) {
          continue
        }

        queue.push([newR, newC])
        visited.add(key)
      }
    }
    length++
  }
}

// @ts-ignore
const grid = [
  [0, 0, 0, 0],
  [1, 1, 0, 0],
  [0, 0, 0, 1],
  [0, 1, 0, 0],
]

console.log(bfs(grid))
