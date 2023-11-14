// @ts-ignore
const removeDuplicates = (nums: number[]) => {
  let result = 0
  let left = 0

  for (let i = 0; i < nums.length; i++) {
    if (
      nums[left] !== nums[i + 1] ||
      (nums[i + 1] === nums[left] && nums[left] !== nums[left - 1])
    ) {
      nums[result++] = nums[i]
    }

    left++
  }

  return result
}

// Big-O = O(n)
// Space Complexity = O(1)

// Explanation:
// We check the array once and the number of iterations is directly proportional to the length of the array
// No extra space needed proportional to the input size

// @ts-ignore
const nums = [0, 0, 1, 1, 1, 1, 2, 3, 3]
console.log(removeDuplicates(nums))
