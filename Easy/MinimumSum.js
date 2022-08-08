const num = 8659

/**
 * @param {number} num
 * @return {number}
 */
const minimumSum = (num) => {
  const arr = num.toString().split('')

  arr.sort((a, b) => a - b)

  console.log(arr)

  // Converts the string to numbers then adding two pairs. The pairing of index 0 + 3, and index 1 + 2 will always result to the minimum sum
  const minSum = Number(arr[0] + arr[3]) + Number(arr[1] + arr[2])

  return minSum
}

console.log(minimumSum(num))
