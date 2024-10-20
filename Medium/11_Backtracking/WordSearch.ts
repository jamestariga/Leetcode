const exist = (board: string[][], word: string): boolean => {
  const ROWS: number = board.length
  const COLS: number = board[0].length
  const path = new Set<string>()

  const dfs = (r: number, c: number, i: number) => {
    if (i === word.length) return true

    if (
      r < 0 ||
      c < 0 ||
      r >= ROWS ||
      c >= COLS ||
      word[i] !== board[r][c] ||
      path.has(`${r}-${c}`)
    )
      return false

    path.add(`${r}-${c}`)

    let result =
      dfs(r + 1, c, i + 1) ||
      dfs(r - 1, c, i + 1) ||
      dfs(r, c + 1, i + 1) ||
      dfs(r, c - 1, i + 1)

    path.delete(`${r}-${c}`)

    return result
  }

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (dfs(r, c, 0)) {
        return true
      }
    }
  }

  return false
}

const board = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E'],
]
const word = 'ABCCED'

console.log(exist(board, word))
