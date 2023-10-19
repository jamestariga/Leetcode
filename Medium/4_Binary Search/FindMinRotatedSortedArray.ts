const findMin = (nums: number[]): number => {
  if (nums.length === 1) return nums[0]

  let left: number = 0
  let right: number = nums.length - 1
  let mid: number

  while (left < right) {
    mid = left + Math.floor((right - left) / 2)

    if (nums[mid] > nums[right]) {
      left = mid + 1
    } else {
      right = mid
    }
  }

  return nums[left]
}

// const nums = [3, 4, 5, 1, 2]
// const nums = [4, 5, 6, 7, 0, 1, 2]
// const nums = [11, 13, 15, 17]
// const nums = [110, 20, 34, 23, 109, 2, 13, 15, 17]
// const nums = [11, 13, 15, 173, 323, 23, 12, 13, 42, 45, 98, 10, 2]
// const nums = [3, 1, 2]
const nums = [4, 5, 1, 2, 3]

console.log(findMin(nums))
