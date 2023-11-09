const rob = (nums: number[]): number => {
  return Math.max(
    nums[0],
    helper(nums.slice(0, nums.length - 1)),
    helper(nums.slice(1))
  )
}

const helper = (nums: number[]): number => {
  let total = 0
  nums = [0, ...nums, 0]

  for (let i = 2; i < nums.length; i++) {
    nums[i] = Math.max(nums[i - 2] + nums[i], nums[i - 1])

    total = nums[i]
  }

  return total
}

const nums = [2, 3, 2]

console.log(rob(nums))
