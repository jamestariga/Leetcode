// Brute Force
// const findDuplicate = (nums: number[]): number => {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] === nums[j]) {
//         return nums[i]
//       }
//     }
//   }
// }

// Floyd's Algorithm, finding the beginning of a linked list cycle
const findDuplicate = (nums: number[]): number => {
  let fast = 0
  let slow = 0
  let slow2 = 0

  // Phase 1, find the intersection point
  do {
    slow = nums[slow]
    fast = nums[nums[fast]]
  } while (fast !== slow)

  // Phase 2, find the entrance to the cycle
  while (slow !== slow2) {
    slow = nums[slow]
    slow2 = nums[slow2]
  }

  return slow
}

// @ts-ignore
const nums = [1, 3, 4, 2, 2]

console.log(findDuplicate(nums))
