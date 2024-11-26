const countFairPairs = (
  nums: number[],
  lower: number,
  upper: number
): number => {
  const search = (left: number, right: number, target: number) => {
    while (left <= right) {
      let middle = left + Math.ceil((right - left) / 2)

      if (nums[middle] >= target) {
        right = middle - 1
      } else {
        left = middle + 1
      }
    }

    return left
  }

  nums.sort((a, b) => a - b)
  let result: number = 0

  for (let i = 0; i < nums.length; i++) {
    const low = lower - nums[i]
    const up = upper - nums[i]

    result +=
      search(i + 1, nums.length - 1, up + 1) -
      search(i + 1, nums.length - 1, low)
  }

  return result
}

const nums = [0, 1, 7, 4, 4, 5]
const lower = 3
const upper = 6

console.log(countFairPairs(nums, lower, upper))
