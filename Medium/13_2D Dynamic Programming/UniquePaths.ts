const uniquePaths = (m: number, n: number): number => {
  let row = new Array(n).fill(1)

  for (let i = 1; i < m; i++) {
    let newRow = Array(n).fill(1)

    for (let j = n - 2; j > -1; j--) {
      newRow[j] = newRow[j + 1] + row[j]
    }

    row = newRow
  }

  return row[0]
}

const m = 4
const n = 4
console.log(uniquePaths(m, n))
