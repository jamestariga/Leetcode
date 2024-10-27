const maxAreaOfIsland = (grid: number[][]): number => {
  const ROW: number = grid.length
  const COL: number = grid[0].length
  let maxArea: number = 0
  const visited = new Set<string>()

  const dfs = (r: number, c: number) => {
    if (
      r < 0 ||
      c < 0 ||
      r >= ROW ||
      c >= COL ||
      grid[r][c] === 0 ||
      visited.has(`${r}-${c}`)
    )
      return 0

    visited.add(`${r}-${c}`)

    let area = 1

    area += dfs(r + 1, c)
    area += dfs(r - 1, c)
    area += dfs(r, c + 1)
    area += dfs(r, c - 1)

    return area
  }

  for (let r = 0; r < ROW; r++) {
    for (let c = 0; c < COL; c++) {
      const currArea = dfs(r, c)
      maxArea = Math.max(maxArea, currArea)
    }
  }

  return maxArea
}

const grid = [
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
]

console.log(maxAreaOfIsland(grid))
