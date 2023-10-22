const pivotIndex = (nums: number[]): number => {
  let totalSum: number = 0
  let leftSum = 0

  for (let i = 0; i < nums.length; i++) {
    totalSum += nums[i]
  }

  for (let i = 0; i < nums.length; i++) {
    let rightSum = totalSum - nums[i] - leftSum

    if (leftSum === rightSum) return i

    leftSum += nums[i]
  }

  return -1
}

// const nums = [1, 7, 3, 6, 5, 6]
const nums = [-1, -1, -1, -1, -1, 0]
// const nums = [2, 1, -1]

console.log(pivotIndex(nums))

/* Approach:

We want to calculate the total sum of the array. Then we iterate over that same array and during this iteration,
we want to calculate both the left sum and the right sum of the array. In the first iteration, we know that left sum will always be 0
since the left of the 0th index does not exist therefore, we initialize it as 0. Then we can calculate the right sum by subtracting the 
total sum to the current element and the left sum.

Example:
const nums = [1, 7, 3, 6, 5, 6]
first iteration: right sum = 28 - 1 - 0
second iteration: right sum = 28 - 7 - 1
third iteration: right sum = 28 - 3 - 8
fourth iteration: right sum = 28 - 6 - 11

In the fourth iteration, the right sum is equals to the left sum (11), therefore, we can exit the loop. Otherwise we will return -1 */
