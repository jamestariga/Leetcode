// My version:
// const moveZeroes = (nums: number[]): void => {
//   let left = 0
//   let right = 1

//   while (right < nums.length) {
//     if (nums[left] === 0 && nums[right] !== 0) {
//       let temp = nums[left]
//       nums[left] = nums[right]
//       nums[right] = temp
//       left++
//       right++
//     } else {
//       right++
//     }
//   }
// }

// const moveZeroes = (nums: number[]): void => {
//   let left = 0

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i]) {
//       let temp = nums[left]
//       nums[left] = nums[i]
//       nums[i] = temp
//       left++
//     }
//   }
// }

// Leetcode version:
const moveZeroes = (nums: number[]): void => {
  let write = 0

  for (let i = 0; i < nums.length; i++) {
    // Store the current value in a temp variable
    let temp = nums[i]

    // Replace the current value with 0
    nums[i] = 0

    // If temp is 0, increment the write pointer and assign the temp variable to the index that corresponds with write
    if (temp !== 0) {
      nums[write++] = temp
    }
  }

  console.log(nums)
}

// @ts-ignore
const nums = [0, 1, 0, 3, 12]
// const nums = [0, 0, 0, 2, 1, 12]

moveZeroes(nums)

/* Approach:

We use two pointers, one to track the current value being read in the array, the other to track the position we can write in.

If we have an array without any zeroes, then the write pointer and read pointer will stay in keeping the whole time.

However, if we do encounter a zero when reading using the read pointer, we simply do not increment the write pointer.

This means the next write of a non zero will lag behind the read pointer, overwriting the zero we found.

For simplicities sake, and to ensure trailing zeroes are maintained properly, we always assign 0 to the index we just read from.

It may be filled in at a later date with a non zero value if one exists. If not it will remain zero, along with all subsequent indexes, satisfying the excercises' criteria. */
