// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

// Constraints:

// 1 <= prices.length <= 10^5
// 0 <= prices[i] <= 10^4

// Solution:

const maxProfit = (prices) => {
  // Left is buy
  let left = 0

  // Right is sell
  let right = 1

  // Max Profit if the last index is not the lowest element in the array otherwise it will return 0
  let maxP = 0

  /* Iterating through the array and comparing the left and right values. If the left value is less
  than the right value, it will calculate the profit and compare it to the maxP. If the left value
  is greater than the right value, it will set the left value to the right value. */
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left]
      maxP = Math.max(maxP, profit)
    } else {
      left = right
    }
    right += 1
  }

  return maxP
}
