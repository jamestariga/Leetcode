const maxWidthRamp = (nums: number[]): number => {
  // A pre process array that holds the largest value to the right of the pointer
  const maxRight: number[] = Array.from(nums).fill(0)
  let n: number = nums.length - 1
  let prev_max: number = 0
  let result: number = 0
  let left: number = 0

  // Fill the array with the largest number to the right
  for (let i = n; i >= 0; i--) {
    maxRight[n] = Math.max(nums[i], prev_max)
    prev_max = maxRight[n]
    n--
  }

  for (let right = 0; right < nums.length; right++) {
    while (nums[left] > maxRight[right]) {
      left++
    }

    result = Math.max(result, right - left)
  }

  return result
}

const nums = [6, 0, 8, 2, 1, 5]
console.log(maxWidthRamp(nums))
