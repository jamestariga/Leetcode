const removeElement = (nums: number[], val: number) => {
  let result = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      /* `nums[result++] = nums[i]` is assigning the value of `nums[i]` to the element at index
      `result` in the `nums` array, and then incrementing the value of `result` by 1. This line of
      code is used to overwrite the elements in the `nums` array with the elements that are not
      equal to `val`. */
      nums[result++] = nums[i]
    }
  }
  return result
}

// Big-O = O(n) = Loop over the nums array, check all of the values,
// as the input grows, the amount of time increases n times
// Space Complexity = O(1) = No extra space needed proportional to the input size

// @ts-ignore
const nums = [0, 1, 2, 2, 3, 0, 4, 2]
const val = 2

console.log(removeElement(nums, val))
