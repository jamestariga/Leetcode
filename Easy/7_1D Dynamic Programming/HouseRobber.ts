const rob = (nums: number[]): number => {
  let total = 0
  nums = [0, ...nums, 0]

  for (let i = 2; i < nums.length; i++) {
    // Replace the current element with the max
    nums[i] = Math.max(nums[i - 2] + nums[i], nums[i - 1])

    total = nums[i]
  }

  return total
}

// @ts-ignore
// const nums = [2, 1, 1, 2]
// @ts-ignore
// const nums = [1, 2, 3, 1]
// @ts-ignore
const nums = [2, 7, 9, 3, 1]

console.log(rob(nums))
