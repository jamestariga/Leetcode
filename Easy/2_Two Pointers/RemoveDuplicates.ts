// @ts-ignore
const removeDuplicates = (nums: number[]) => {
  let result = 0
  let left = 0

  for (let i = 0; i < nums.length; i++) {
    /* The `if` statement is checking if the current element `nums[i]` is different from the next
    element `nums[i + 1]`. If they are different, it means that the current element is not a
    duplicate. In that case, the current element is assigned to the `result` index of the `nums`
    array, and `result` is incremented by 1. This effectively removes duplicates from the `nums`
    array and keeps track of the new length of the array without duplicates. */
    if (nums[left] !== nums[i + 1]) {
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
const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
console.log(removeDuplicates(nums))
