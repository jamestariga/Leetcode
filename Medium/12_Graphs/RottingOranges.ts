const orangesRotting = (grid: number[][]): number => {
  if (grid === null) return -1

  const row: number = grid.length
  const col: number = grid[0].length
  const queue: [number, number][] = []
  let freshOranges: number = 0
  let minutes: number = 0

  // Directions that we can move from
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ]

  for (let r = 0; r < row; r++) {
    for (let c = 0; c < col; c++) {
      // Increment fresh oranges whenever we encounter 1 in the grid
      if (grid[r][c] === 1) freshOranges++

      // We add the cell that contains rotten oranges to our queue
      if (grid[r][c] === 2) queue.push([r, c])
    }
  }

  while (queue.length > 0 && freshOranges > 0) {
    // Take a snapshot of the queue length
    const queueLength = queue.length

    for (let i = 0; i < queueLength; i++) {
      // Destructuring the first element of the queue to keep track of the current cell
      const [currRow, currCol] = queue.shift()

      // Explore adjacent cells in all directions
      for (const [dr, dc] of directions) {
        const newRow = currRow + dr
        const newCol = currCol + dc

        // Check if the adjacent cell is within bounds or not a 1
        if (
          newRow < 0 ||
          newRow >= row ||
          newCol < 0 ||
          newCol >= col ||
          grid[newRow][newCol] !== 1
        )
          continue

        // Cells that meets our conditions are replaced by a 2
        grid[newRow][newCol] = 2
        // Decrement our fresh oranges
        freshOranges--
        // Enqueue the neighbor for further exploration
        queue.push([newRow, newCol])
      }
    }

    // After an iteration, we increment minutes by 1
    minutes++
  }

  // Return minutes when we ran out of fresh oranges
  return freshOranges > 0 ? -1 : minutes
}

const grid = [
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 1],
]

console.log(orangesRotting(grid))

/* 
The time complexity of this algorithm is O(N*M), where N is the number of rows and M is the number of columns in the grid. 
This is because the algorithm iterates over the entire grid once to count the fresh oranges and add the rotten oranges to a queue, 
and then performs a breadth-first search (BFS) on the queue, which can visit each cell at most once.

The space complexity of this algorithm is O(N * M), where N is the number of rows and M is the number of columns in the grid. 
This is because the code algorithm a queue data structure that can potentially store all the cells in the grid in the worst case, 
when all the cells are rotten. 
*/
