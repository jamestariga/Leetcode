const maxMoves = (grid: number[][]): number => {
  const ROW: number = grid.length
  const COL: number = grid[0].length
  const queue: [number, number, number][] = []
  const visited: boolean[][] = Array.from({ length: ROW }, () =>
    Array(COL).fill(false)
  )
  const directions = [-1, 0, 1]
  let max: number = 0

  for (let i = 0; i < ROW; i++) {
    visited[i][0] = true
    queue.push([i, 0, 0])
  }

  while (queue.length > 0) {
    const queueLength: number = queue.length

    for (let i = 0; i < queueLength; i++) {
      const [row, col, count] = queue.shift()

      max = Math.max(max, count)

      for (const dir of directions) {
        const newRow = row + dir
        const newCol = col + 1

        if (
          newRow >= 0 &&
          newRow < ROW &&
          newCol >= 0 &&
          newCol < COL &&
          !visited[newRow][newCol] &&
          grid[row][col] < grid[newRow][newCol]
        ) {
          visited[newRow][newCol] = true
          queue.push([newRow, newCol, count + 1])
        }
      }
    }
  }

  return max
}

const grid = [
  [2, 4, 3, 5],
  [5, 4, 9, 3],
  [3, 4, 2, 11],
  [10, 9, 13, 15],
]

console.log(maxMoves(grid))
