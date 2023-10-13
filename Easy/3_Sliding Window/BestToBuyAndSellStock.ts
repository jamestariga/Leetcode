const maxProfit = (prices: number[]) => {
  let left = 0
  let right = 1
  let maxP = 0

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

const prices = [7, 1, 5, 3, 6, 4]

console.log(maxProfit(prices))
