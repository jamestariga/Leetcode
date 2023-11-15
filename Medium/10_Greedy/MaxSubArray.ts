// Brute Force
// const maxSubArray = (nums: number[]): number => {
//   let sum = 0
//   for (let i = 0; i < nums.length; i++) {
//     let currSum = 0
//     for (let j = i; j < nums.length; j++) {
//       currSum += nums[j]
//       sum = Math.max(sum, currSum)
//     }
//   }

//   return sum
// }

const maxSubArray = (nums: number[]): number => {
  let sum = nums[0]
  let currSum = Number.MIN_SAFE_INTEGER

  for (let num of nums) {
    if (currSum < 0) {
      currSum = 0
    }

    currSum += num

    sum = Math.max(sum, currSum)
  }

  return sum
}

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

console.log(maxSubArray(nums))
