const productExceptSelf = (nums: number[]): number[] => {
  let answer: number[] = []
  let prod: number = 1

  for (let i = 0; i < nums.length; i++) {
    answer[i] = prod
    prod *= nums[i]
  }

  prod = 1

  for (let i = nums.length - 1; i >= 0; i--) {
    answer[i] *= prod
    prod *= nums[i]
  }

  return answer
}

// @ts-ignore
const nums = [1, 2, 3, 4]
// const nums = [-1, 1, 0, -3, 3]

console.log(productExceptSelf(nums))
