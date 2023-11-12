const orangesRotting = (grid: number[][]): number => {
  if (grid === null) return -1

  const row = grid.length
  const col = grid[0].length
  let minutes = 0
  let freshOranges = 0
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ]

  const queue: [number, number][] = []

  for (let r = 0; r < row; r++) {
    for (let c = 0; c < col; c++) {
      if (grid[r][c] === 1) {
        freshOranges++
      }

      if (grid[r][c] === 2) {
        queue.push([r, c])
      }
    }
  }

  while (queue.length > 0 && freshOranges > 0) {
    let queueLength = queue.length

    for (let i = 0; i < queueLength; i++) {
      const [currRow, currCol] = queue.shift()

      for (const [dr, dc] of directions) {
        const newRow = currRow + dr
        const newCol = currCol + dc

        if (
          newRow < 0 ||
          newRow >= row ||
          newCol < 0 ||
          newCol >= col ||
          grid[newRow][newCol] !== 1
        )
          continue

        grid[newRow][newCol] = 2
        queue.push([newRow, newCol])
        freshOranges--
      }
    }

    minutes++
  }

  return freshOranges === 0 ? minutes : -1
}

const grid = [
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 1],
]

console.log(orangesRotting(grid))
