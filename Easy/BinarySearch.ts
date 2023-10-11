const search = (nums: number[], target: number): number => {
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

  return -1
}

const nums = [-1, 0, 3, 5, 9, 12]
const target = 9

console.log(search(nums, target))
