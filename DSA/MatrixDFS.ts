// Q: Count the unique paths from the top left to the bottom right.
// A single path may only move along 0's and can't visit the same cell more than once.

const uniquePaths = (grid: number[][]): number => {
  let set = new Set<string>()

  const dfs = (
    grid: number[][],
    r: number,
    c: number,
    visited: Set<string>
  ): number => {
    const row = grid.length
    const col = grid[0].length

    if (
      Math.min(r, c) < 0 ||
      r === row ||
      c === col ||
      visited.has(`${r}-${c}`) ||
      grid[r][c] === 1
    )
      return 0

    if (r === row - 1 && c === col - 1) return 1

    visited.add(`${r}-${c}`)

    let count = 0

    // Down
    count += dfs(grid, r + 1, c, visited)
    // Up
    count += dfs(grid, r - 1, c, visited)
    // Right
    count += dfs(grid, r, c + 1, visited)
    // Left
    count += dfs(grid, r, c - 1, visited)

    visited.delete(`${r}-${c}`)

    return count
  }

  return dfs(grid, 0, 0, set)
}

const grid = [
  [0, 0, 0, 0],
  [1, 1, 0, 0],
  [0, 0, 0, 1],
  [0, 1, 0, 0],
]

console.log(uniquePaths(grid))

/* 
In TypeScript, the keys of a Set or an object must be of a consistent type.Since pairs(tuples)
in TypeScript can have different types for each element, it's not directly suitable as a key for a Set or an object.

To work around this, I've used a string key in the format ${r}-${c}, where ${r} and ${c} are converted 
to strings and concatenated with a hyphen -.This ensures a consistent string format as the key,
allowing it to be used in Sets or objects. 
*/
