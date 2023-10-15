const searchInsert = (nums: number[], target: number): number => {
  let left = 0
  let right = nums.length - 1
  let middle: number

  while (left <= right) {
    middle = left + Math.floor((right - left) / 2)
    if (nums[middle] === target) {
      return middle
    }

    if (nums[middle] > target) {
      right = middle - 1
    } else {
      left = middle + 1
    }
  }

  return left
}

// @ts-ignore
const nums = [1, 3, 5, 6, 9, 14, 19, 21]
// @ts-ignore
const target = 20

console.log(searchInsert(nums, target))
