const maxFrequency = (nums: number[], k: number): number => {
  // Sort the array
  nums.sort((a, b) => a - b)

  let total: number = 0
  let left: number = 0
  let max: number = 0

  for (let right = 0; right < nums.length; right++) {
    // Current window length
    const window: number = right - left + 1

    // Increment the total by adding the elements on the right
    total += nums[right]

    if (nums[right] * window <= total + k) {
      max = window
    } else {
      total -= nums[left]
      left++
    }
  }

  return max
}

const nums = [1, 4, 8, 13]
const k = 5

console.log(maxFrequency(nums, k))
