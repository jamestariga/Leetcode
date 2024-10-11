const maxSubarraySumCircular = (nums: number[]): number => {
  let totalSum: number = 0
  let maxSum: number = nums[0]
  let currMax: number = 0
  let minSum: number = nums[0]
  let currMin: number = 0

  for (const num of nums) {
    currMax = Math.max(currMax + num, num)
    currMin = Math.min(currMin + num, num)
    maxSum = Math.max(maxSum, currMax)
    minSum = Math.min(minSum, currMin)
    totalSum += num
  }

  return maxSum > 0 ? Math.max(maxSum, totalSum - minSum) : maxSum
}

const nums = [5, -3, 5]
console.log(maxSubarraySumCircular(nums))
