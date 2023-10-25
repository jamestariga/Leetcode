const longestConsecutive = (nums: number[]) => {
  // Initialized a set
  let set = new Set<number>(nums)

  // Counter for the longest sequence
  let longest = 0

  for (let i in nums) {
    console.log(nums[i] - 1)

    // Check for the start of the sequence
    if (!set.has(nums[i] - 1)) {
      let length = 0

      // Iterate over the set
      while (set.has(nums[i] + length)) {
        length += 1
      }

      longest = Math.max(length, longest)
    }
  }

  return longest
}

// @ts-ignore
const nums = [100, 4, 200, 1, 3, 2]

console.log(longestConsecutive(nums))

// Set Initialization: let set = new Set<number>(nums)

// Creating a set from an array takes O(n) time, where n is the number of elements in the array.

// Iterating through the array: for (let i in nums)

// The loop iterates through each element in the array once, so the time complexity here is O(n), where n is the number of elements in the array.

// Inner While Loop: while (set.has(nums[i] + length))

// This loop iterates over consecutive elements in the set until a gap is found. In the worst case, it could iterate over all elements in the set.
// In each iteration, it checks if the set has a specific element, and this operation is typically O(1) for a set.

// In the worst case, the inner while loop could run O(n) times in total, considering all iterations of the outer loop.

// Therefore, the overall time complexity of the code is O(n) + O(n) + O(n) = O(n), where n is the number of elements in the array.

// So, the time complexity of the given code is linear, O(n), where n is the length of the input array nums.
