const twoSum = (nums: number[], target: number) => {
  let hash: { [key: number]: number } = {}

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i]

    if (diff in hash) {
      return [hash[diff], i]
    } else {
      hash[nums[i]] = i
    }
  }
}

// @ts-ignore
const nums = [2, 7, 11, 15]
// @ts-ignore
const target = 9

console.log(twoSum(nums, target))
