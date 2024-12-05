const countUnguarded = (
  m: number,
  n: number,
  guards: number[][],
  walls: number[][]
): number => {
  const grid: number[][] = Array(m)
    .fill(0)
    .map(() => Array(n).fill(0))

  for (const [row, col] of guards) {
    grid[row][col] = 1
  }

  for (const [row, col] of walls) {
    grid[row][col] = 2
  }

  const dfs = (r: number, c: number, dir: string) => {
    if (
      r < 0 ||
      r >= grid.length ||
      c < 0 ||
      c >= grid[0].length ||
      grid[r][c] === 1 ||
      grid[r][c] === 2
    )
      return

    grid[r][c] = 3

    if (dir === 'u') dfs(r - 1, c, 'u')
    if (dir === 'd') dfs(r + 1, c, 'd')
    if (dir === 'l') dfs(r, c + 1, 'l')
    if (dir === 'r') dfs(r, c - 1, 'r')
  }

  for (const guard of guards) {
    dfs(guard[0] - 1, guard[1], 'u')
    dfs(guard[0] + 1, guard[1], 'd')
    dfs(guard[0], guard[1] + 1, 'l')
    dfs(guard[0], guard[1] - 1, 'r')
  }

  let count: number = 0
  const ROW = grid.length
  const COL = grid[0].length

  for (let r = 0; r < ROW; r++) {
    for (let c = 0; c < COL; c++) {
      if (grid[r][c] === 0) count++
    }
  }

  return count
}

const m = 4
const n = 6
const guards = [
  [0, 0],
  [1, 1],
  [2, 3],
]
const walls = [
  [0, 1],
  [2, 2],
  [1, 4],
]

console.log(countUnguarded(m, n, guards, walls))
