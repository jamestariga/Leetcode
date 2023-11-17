const canJump = (nums: number[]): boolean => {
  let end = nums.length - 1

  for (let i = nums.length - 1; i >= 0; i--) {
    if (i + nums[i] >= end) {
      end = i
    }
  }

  return end === 0
}

// const jump = [2, 3, 1, 1, 5]
const jump = [3, 2, 1, 0, 4]

console.log(canJump(jump))
