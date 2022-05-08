// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Input: nums = [1, 2, 3, 1]
// Output: true
// Input: nums = [1, 2, 3, 4]
// Output: false
// Input: nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
// Output: true

// Solution:

/**
 * We create an empty array, then we loop through the input array and check if the empty array contains
 * the current element. If it does, we return true. If it doesn't, we add the current element to the
 * empty array. If we finish looping through the input array, we return false
 * @param nums - an array of integers
 * @returns A boolean value.
 */

const containsDuplicate = (nums) => {
  let number = []

  for (let i = 0; i < nums.length; i++) {
    if (number.includes(nums[i])) {
      return true
    }
    number.push(nums[i])
  }

  return false
}

let x = [1, 2, 3, 1]
let y = [1, 2, 3, 4]

console.log(containsDuplicate(x))
console.log(containsDuplicate(y))
