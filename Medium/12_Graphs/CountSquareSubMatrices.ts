const countSquares = (matrix: number[][]): number => {
  const ROW: number = matrix.length
  const COL: number = matrix[0].length
  let result: number = 0

  // caching to avoid recomputing
  const cache: { [key: number]: string } = {}

  const dfs = (r: number, c: number) => {
    if (r === ROW || c === COL || matrix[r][c] === 0) {
      return 0
    }

    const key: string = `${r}-${c}`
    if (key in cache) {
      return cache[key]
    }

    cache[key] = 1 + Math.min(dfs(r, c + 1), dfs(r + 1, c), dfs(r + 1, c + 1))

    return cache[key]
  }

  for (let r = 0; r < ROW; r++) {
    for (let c = 0; c < COL; c++) {
      result += dfs(r, c)
    }
  }

  return result
}

const matrix = [
  [0, 1, 1, 1],
  [1, 1, 1, 1],
  [0, 1, 1, 1],
]

console.log(countSquares(matrix))
