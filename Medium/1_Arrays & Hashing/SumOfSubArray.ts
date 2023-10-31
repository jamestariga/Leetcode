// Brute Force O(n^2)
// const subarraySum = (nums: number[], k: number): number => {
//   let count = 0

//   for (let left = 0; left < nums.length; left++) {
//     let curr = 0

//     let right = left

//     while (right < nums.length) {
//       curr += nums[right]

//       if (curr === k) count++

//       right++
//     }
//   }

//   return count
// }

// Hashmap O(n)
const subarraySum = (nums: number[], k: number): number => {
  const prefixSum: { [key: number]: number } = { 0: 1 }
  let count = 0
  let sum = 0

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]

    let diff = sum - k

    if (diff in prefixSum) {
      count += prefixSum[diff]
    }

    prefixSum[sum] = (prefixSum[sum] || 0) + 1
  }

  return count
}

/* Approach:
We create a hash map to store the frequency of each prefix sum with a default value of { 0: 1 }
Then, we iterate over the nums array and as we iterate, we want to calculate both the sum and the difference
between the `sum` and`k`.If we have the difference in our hash map, we add it to our current count.
Lastly, we want to keep track of our prefix sum by counting how many times it appeared during the iteration.

Big-O = O(n) - Iterate over the array
Space complexity = O(n) - Used a hash map to store the prefix sum frequency

*/

// @ts-ignore
// const nums = [1, 2, 3]
// const nums = [1, 1, 1]
const nums = [1, -1, 1, 1, 1, 1]
// const nums = [2, 3, 6, 5, 4, 1, 10]
// const nums = [3, 4, 7, -2, 2, 1, 4, 2]
// @ts-ignore
// const k = 3
// const k = 2
const k = 3
// const k = 5
// const k = 7

console.log(subarraySum(nums, k))
