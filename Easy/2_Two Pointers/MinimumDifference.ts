const minimumDifference = (nums: number[], k: number) => {
  if (k === 1) return 0
  let min = Number.MAX_VALUE

  nums.sort((a, b) => a - b)
  let max = k - 1

  for (let i = 0; i <= nums.length - k; i++) {
    let diff = nums[i + max] - nums[i]
    min = Math.min(min, diff)
  }

  return min
}

// @ts-ignore
const nums = [9, 4, 1, 7]
// const nums = [87063, 61094, 44530, 21297, 95857, 93551, 9918]
// @ts-ignore
const k = 2

console.log(minimumDifference(nums, k))
