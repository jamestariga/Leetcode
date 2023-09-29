/**
 * @param {number[]} nums
 * @return {number}
 */
const numIdenticalPairs = (nums) => {
  let pairs = 0

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] == nums[j] && i < j) {
        pairs++
      }
    }
  }

  return pairs
}

let nums = [1, 1, 1, 1]

console.log(numIdenticalPairs(nums))
