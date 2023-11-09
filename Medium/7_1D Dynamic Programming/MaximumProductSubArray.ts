const maxProduct = (nums: number[]): number => {
  // Store the max number from the nums array
  let result = Math.max(...nums)
  let max = 1
  let min = 1

  for (const n of nums) {
    // Encounter 0, reset max and min to 1 then continue
    if (n === 0) {
      max = 1
      min = 1
      continue
    }

    let temp = max * n

    // Store the max and the min
    max = Math.max(max * n, n * min, n)
    min = Math.min(temp, n * min, n)

    result = Math.max(result, max)
  }

  return result
}

// @ts-ignore
const nums = [2, 3, -2, 4]

console.log(maxProduct(nums))
