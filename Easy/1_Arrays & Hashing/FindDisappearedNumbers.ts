const findDisappearedNumbers = (nums: number[]) => {
  let set = new Set<number>(nums)
  let result: number[] = []

  for (let i = 1; i < nums.length + 1; i++) {
    if (!set.has(i)) {
      result.push(i)
    }
  }

  return result
}

const nums = [4, 3, 2, 7, 8, 2, 3, 1]
// const nums = [1, 1]

console.log(findDisappearedNumbers(nums))
