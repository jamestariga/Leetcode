const arr = [0, 2, 1, 5, 3, 4]

// Output: [0,1,2,4,5,3]

const buildArray = (nums) => {
  let permutation = nums.slice(0, nums.length)

  for (let i in nums) {
    nums[i] = permutation[nums[i]]
  }

  return nums
}

console.log(buildArray(arr))
