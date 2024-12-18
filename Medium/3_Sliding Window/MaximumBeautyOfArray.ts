const maximumBeauty = (nums: number[], k: number): number => {
  nums.sort((a, b) => a - b)
  let result: number = 0
  let left: number = 0

  console.log(nums)

  for (let right = 0; right < nums.length; right++) {
    while (nums[right] - nums[left] > 2 * k) {
      left++
    }

    result = Math.max(result, right - left + 1)
  }

  return result
}

const nums = [4, 6, 1, 2]
const k = 2

console.log(maximumBeauty(nums, k))
