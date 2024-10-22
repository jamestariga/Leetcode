// O(n) time + O(n) space
// const sortArrayByParity = (nums: number[]): number[] => {
//   let left: number = 0
//   let right: number = nums.length - 1
//   let result: number[] = []

//   for (const num of nums) {
//     if (num % 2 === 0) {
//       result[left++] = num
//     } else if (num % 2 !== 0) {
//       result[right--] = num
//     }
//   }

//   return result
// }

// O(n) time + O(1) space
const sortArrayByParity = (nums: number[]): number[] => {
  let left: number = 0

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] % 2 === 0) {
      let temp = nums[left]
      nums[left] = nums[right]
      nums[right] = temp
      left++
    }
  }

  return nums
}

const nums = [3, 1, 2, 4]
console.log(sortArrayByParity(nums))
