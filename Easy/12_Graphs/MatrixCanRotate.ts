const findRotation = (mat: number[][], target: number[][]): boolean => {
  const n: number = mat.length

  const rotateImage = (matrix: number[][]): number[][] => {
    const rotated: number[][] = Array.from({ length: n }, () =>
      Array(n).fill(0)
    )

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        rotated[j][n - 1 - i] = matrix[i][j]
      }
    }

    return rotated
  }

  const isEqual = (matrix1: number[][], matrix2: number[][]): boolean => {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (matrix1[i][j] !== matrix2[i][j]) return false
      }
    }

    return true
  }

  for (let i = 0; i < 4; i++) {
    if (isEqual(mat, target)) return true

    mat = rotateImage(mat)
  }

  return false
}

const mat = [
    [0, 0, 0],
    [0, 1, 0],
    [1, 1, 1],
  ],
  target = [
    [1, 1, 1],
    [0, 1, 0],
    [0, 0, 0],
  ]

console.log(findRotation(mat, target))
