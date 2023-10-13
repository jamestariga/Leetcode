const majorityElement = (nums: number[]): number => {
  let candidate: number = 0
  let count: number = 0
  let limit: number = Math.ceil(nums.length / 2)

  for (let i of nums) {
    if (count === 0) candidate = i

    // Same candidate, add 1, else subtract 1 from the count
    count += i === candidate ? 1 : -1

    // Reached the limit, then break
    if (count >= limit) break
  }

  return candidate
}

// Big-O = O(n)
// Space Complexity = O(1)

// Explanation:
// The time complexity of this algorithm is O(n), where n is the length of the input array nums.
// The reason is that the algorithm iterates through the array once, and at each step,
// it performs constant time operations.

// The space complexity is O(1), meaning that the amount of additional memory used by the algorithm
// does not depend on the size of the input array.The algorithm uses a constant amount of space to
// store variables like candidate, count, and limit, regardless of the size of the input array.

// @ts-ignore
const nums = [8, 8, 8, 8, 8, 1, 2, 3, 4, 5, 6, 7]
// const nums = [2, 2, 1, 1, 1, 2, 2]

console.log(majorityElement(nums))
