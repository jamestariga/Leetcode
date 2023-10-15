const climbStairs = (n: number) => {
  if (n < 2) return 1

  const stairs = [1, 2]

  for (let i = 2; i <= n; i++) {
    stairs[i] = stairs[i - 1] + stairs[i - 2]
  }

  return stairs[n - 1]
}

// @ts-ignore
const n = 4

console.log(climbStairs(n))
