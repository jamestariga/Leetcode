// DFS Approach
const numIslands = (grid: string[][]): number => {
  // Check if grid is null, return 0 if true
  if (grid === null) return 0
  // Get the number of rows and columns in the grid
  const row: number = grid.length
  const col: number = grid[0].length
  // Initialize the count of islands
  let islands: number = 0
  // Initialize a set to track visited cells
  const visited = new Set<string>()

  // DFS function to explore connected land cells
  const dfs = (r: number, c: number) => {
    // if (
    //   !(r >= 0 && r !== row) ||
    //   !(c >= 0 && c !== col) ||
    //   grid[r][c] === '0' ||
    //   visited.has(`${r}-${c}`)
    // )
    //   return

    // Check if the current cell is out of bounds or not land or already visited
    if (
      r < 0 ||
      r >= row ||
      c < 0 ||
      c >= col ||
      grid[r][c] === '0' ||
      visited.has(`${r}-${c}`)
    )
      return

    // Mark the current cell as visited
    visited.add(`${r}-${c}`)

    // Recursively explore neighbors in all directions
    dfs(r, c + 1)
    dfs(r, c - 1)
    dfs(r + 1, c)
    dfs(r - 1, c)
  }

  // Iterate through each cell in the grid
  for (let r = 0; r < row; r++) {
    for (let c = 0; c < col; c++) {
      // If the cell is land and not visited, start DFS to explore connected land cells
      if (grid[r][c] === '1' && !visited.has(`${r}-${c}`)) {
        islands++
        dfs(r, c)
      }
    }
  }

  // Return the count of islands
  return islands
}

// BFS Approach
const numIslands = (grid: string[][]): number => {
  // Check if grid is null, return 0 if true
  if (grid === null) return 0

  // Get the number of rows and columns in the grid
  const rows: number = grid.length
  const cols: number = grid[0].length
  // Initialize a set to track visited cells
  const visited = new Set<string>()
  // Initialize the count of islands
  let islands = 0

  // BFS function to explore connected land cells
  const bfs = (r: number, c: number) => {
    // Initialize a queue to store cells to be explored
    const queue: [number, number][] = []
    // Mark the initial cell as visited and enqueue it
    visited.add(`${r}-${c}`)
    queue.push([r, c])

    // Continue BFS until the queue is empty
    while (queue.length > 0) {
      // Dequeue the front cell
      const [row, col] = queue.shift()

      // Define the possible directions (neighbors)
      const directions = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
      ]

      // Explore neighbors in all directions
      for (const [dr, dc] of directions) {
        const newR: number = row + dr
        const newC: number = col + dc
        const key: string = `${newR}-${newC}`

        // Check if the neighbor is within bounds, is land, and not visited
        if (
          newR >= 0 &&
          newR < rows &&
          newC >= 0 &&
          newC < cols &&
          grid[newR][newC] === '1' &&
          !visited.has(key)
        ) {
          // Enqueue the neighbor for further exploration
          queue.push([newR, newC])
          // Mark the neighbor as visited
          visited.add(key)
        }
      }
    }
  }

  // Iterate through each cell in the grid
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      // If the cell is land and not visited, start BFS to explore connected land cells
      if (grid[r][c] === '1' && !visited.has(`${r}-${c}`)) {
        bfs(r, c)
        islands++
      }
    }
  }

  // Return the count of islands
  return islands
}

// @ts-ignore
const grid = [
  ['1', '1', '1', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '0'],
]

// // @ts-ignore
// console.log(numIslands(grid))
