const minimumSubarrayLength = (nums: number[], k: number): number => {
  let minLength = Infinity
  let windowStart = 0
  let windowEnd = 0
  const bitCounts = new Array(32).fill(0) // Tracks count of set bits at each position

  // Expand window until end of array
  while (windowEnd < nums.length) {
    // Add current number to window
    updateBitCounts(bitCounts, nums[windowEnd], 1)

    // Contract window while OR value is valid
    while (windowStart <= windowEnd && convertBitsToNum(bitCounts) >= k) {
      // Update minimum length found so far
      minLength = Math.min(minLength, windowEnd - windowStart + 1)

      // Remove leftmost number and shrink window
      updateBitCounts(bitCounts, nums[windowStart], -1)
      windowStart += 1
    }

    windowEnd += 1
  }

  return minLength === Infinity ? -1 : minLength
}

const updateBitCounts = (
  bitCounts: number[],
  num: number,
  delta: number
): void => {
  // Update counts for each set bit in the number
  for (let pos = 0; pos < 32; pos++) {
    if (num & (1 << pos)) {
      bitCounts[pos] += delta
    }
  }
}

const convertBitsToNum = (bitCounts: number[]): number => {
  let result = 0

  // Convert bit counts to number using OR operation
  for (let pos = 0; pos < 32; pos++) {
    if (bitCounts[pos]) {
      result |= 1 << pos
    }
  }

  return result
}

const nums = [1, 2, 3]
const k = 3

console.log(minimumSubarrayLength(nums, k))

// Algorithm
// Initialize:
// - a variable minLength to maximum possible integer value to track the shortest valid subarray length.
// - two pointers windowStart and windowEnd to 0 to implement a sliding window.
// - an array bitCounts of size 32 filled with zeros to keep track of set bits at each position.
// Start expanding the window while windowEnd is less than the array length:
// - Add the bits of current number at windowEnd to bitCounts by calling updateBitCounts.
// - While the window contains a valid subarray (OR of numbers ≥ k) and windowStart ≤ windowEnd:
//    Update minLength to minimum of current minLength and current window size.
//    Remove the bits of number at windowStart from bitCounts.
//    Increment windowStart to shrink window from left.
// - Increment windowEnd to expand window from right.
// - Return -1 if no valid subarray found (minLength still maximum), else return minLength.

// Helper method updateBitCounts(bitCounts, number, delta):
// - For each bit position from 0 to 31:
//    Check if bit is set in given number using right shift and AND operation.
//    If bit is set, increment/decrement count at that position by delta.

// Helper method convertBitCountsToNumber(bitCounts):
// - Initialize result to 0.
// - For each bit position from 0 to 31:
//    If count at current position is non-zero, set corresponding bit in result using OR operation.
// - Return the final result.

// Complexity Analysis
// Let n be the length of the nums array.

// Time complexity: O(n)

// The outer loop runs over the length of the input array. For each iteration, we perform two operations: the first operation updates the bit counts, and the second operation checks if the current window is valid by converting bit counts to numbers. Both these take O(32)=O(1) time.

// The inner while loop can run at most n times across all iterations of the outer loop, as windowStart can only be incremented n times in total.

// Thus, the total time complexity of our algorithm is O(n).

// Space complexity: O(1)

// The algorithm uses a fixed-size array bitCounts of size 32 to store the count of set bits at each position. Besides this, it uses only a few integer variables (minLength, windowStart, windowEnd) for tracking the window and result.

// Therefore, the total space complexity is O(1) as it uses constant extra space independent of input size.
