const x = [1, 2, 3, 4, 5]
const y = [1, 1, 1, 1, 1]

const runningSum = (nums) => {
  let sum = 0

  let x = nums.map((x) => {
    sum += x
    return sum
  })

  return x
}

console.log(runningSum(y))
