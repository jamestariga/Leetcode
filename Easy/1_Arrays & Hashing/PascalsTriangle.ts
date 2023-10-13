const generate = (numRows: number) => {
  // Create an array with the length of numRows
  let arr = new Array(numRows)

  for (let i = 0; i < numRows; i++) {
    // Creating a new array at index `i` of the `arr`
    // array. The length of this new array is `i + 1`.
    arr[i] = new Array(i + 1)

    // First and last elements will be 1
    arr[i][0] = 1
    arr[i][i] = 1

    for (let j = 1; j < i; j++) {
      arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j]
    }
  }

  return arr
}

const numRows = 5
console.log(generate(numRows))
