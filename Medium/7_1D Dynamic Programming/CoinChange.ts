const coinChange = (coins: number[], amount: number): number => {
  const dp = Array(amount + 1).fill(amount + 1)

  dp[0] = 0

  for (let i = 1; i < amount + 1; i++) {
    for (let c of coins) {
      if (i - c >= 0) {
        dp[i] = Math.min(dp[i], 1 + dp[i - c])
      }
    }
  }

  return dp[amount] !== amount + 1 ? dp[amount] : -1
}

const coins = [1, 2, 5]
const amount = 11
console.log(coinChange(coins, amount))
