const minSubArrayLen = (target: number, nums: number[]): number => {
  let left = 0
  let sum = 0
  let min = Number.MAX_SAFE_INTEGER

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right]

    while (sum >= target) {
      min = Math.min(right - left + 1, min)
      sum -= nums[left]
      left++
    }
  }

  return min === Number.MAX_SAFE_INTEGER ? 0 : min
}

// @ts-ignore
const target = 7
// @ts-ignore
const nums = [2, 3, 1, 2, 4, 3]

console.log(minSubArrayLen(target, nums))
