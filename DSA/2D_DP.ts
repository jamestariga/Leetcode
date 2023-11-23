// Q: Count the number of unique paths from the top left to the bottom right. You are only allowed to move down or to the right.

const uniquePaths = (m: number, n: number): number => {
  // return bruteForce(0, 0, m, n)

  const cache = Array.from(Array(m), () => new Array(n).fill(0))

  return memoization(0, 0, m, n, cache)
}

// Brute Force - Time and Space: O(2^ (n + m))
const bruteForce = (
  r: number,
  c: number,
  rows: number,
  cols: number
): number => {
  if (r === rows || c === cols) return 0

  if (r === rows - 1 && c === cols - 1) return 1

  return bruteForce(r + 1, c, rows, cols) + bruteForce(r, c + 1, rows, cols)
}

// Top Down DP, Time and Space: O(n * m)
const memoization = (
  r: number,
  c: number,
  rows: number,
  cols: number,
  cache: number[][]
): number => {
  if (r === rows || c === cols) return 0

  if (cache[r][c] > 0) return cache[r][c]

  if (r === rows - 1 && c === cols - 1) return 1

  cache[r][c] =
    memoization(r + 1, c, rows, cols, cache) +
    memoization(r, c + 1, rows, cols, cache)

  return cache[r][c]
}

const rows = 4
const cols = 4

console.log(uniquePaths(rows, cols))
