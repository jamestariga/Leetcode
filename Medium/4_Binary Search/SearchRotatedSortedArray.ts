// @ts-ignore
const search = (nums: number[], target: number): number => {
  let left = 0
  let right = nums.length - 1
  let mid: number

  while (left <= right) {
    mid = left + Math.floor((right - left) / 2)

    if (nums[mid] === target) {
      return mid
    }

    if (nums[left] <= nums[mid]) {
      if (target > nums[mid] || target < nums[left]) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    } else {
      if (target < nums[mid] || target > nums[right]) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    }
  }

  return -1
}

// @ts-ignore
const nums = [7, 8, 9, 1, 2, 3, 4, 5, 6]
// const nums = [4, 5, 6, 7, 0, 1, 2]
// const nums = [4, 5, 6, 7, 0, 1, 2]
// const nums = [1, 2, 3, 4, 5]
// const nums = [6, 7, 8, 9, 1, 2, 3, 4, 5]
// const nums = [5]
// const nums = [4]
// @ts-ignore
const target = 1
console.log(search(nums, target))
