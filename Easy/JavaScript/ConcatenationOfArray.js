const arr = [1, 2, 3, 4, 5]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const getConcatenation = (nums) => {
  const concatenate = nums.concat(nums)

  return concatenate
}

console.log(getConcatenation(arr))
