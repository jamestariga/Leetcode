const nums = [2, 5, 1, 3, 4, 7]
const n = 3

const shuffle = (nums, n) => {
  let res = []

  for (let i = 0; i < n; i++) {
    res.push(nums[i])
    res.push(nums[i + n])
  }

  return res
}

console.log(shuffle(nums, n))
