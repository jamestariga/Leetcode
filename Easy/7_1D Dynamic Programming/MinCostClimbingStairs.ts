const minCostClimbingStairs = (cost: number[]): number => {
  for (let i = 2; i < cost.length; i++) {
    cost[i] += Math.min(cost[i - 2], cost[i - 1])
  }

  return Math.min(cost[cost.length - 1], cost[cost.length - 2])
}

// const cost = [10, 15, 20]
const cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
console.log(minCostClimbingStairs(cost))
