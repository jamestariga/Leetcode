const maximumSubarraySum = (nums: number[], k: number): number => {
  const set = new Set<number>()
  let result: number = 0
  let left: number = 0
  let currSum: number = 0

  for (let right = 0; right < nums.length; right++) {
    currSum += nums[right]

    while (set.has(nums[right])) {
      set.delete(nums[left])
      currSum -= nums[left++]
    }

    if (right + 1 - left === k) {
      result = Math.max(result, currSum)
      set.delete(nums[left])
      currSum -= nums[left++]
    }

    set.add(nums[right])
  }

  return result
}

const nums = [1, 5, 4, 2, 9, 9, 9]
const k = 3

console.log(maximumSubarraySum(nums, k))
