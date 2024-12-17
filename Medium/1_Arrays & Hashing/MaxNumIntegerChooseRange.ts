const maxCount = (n: number, maxSum: number, banned: number[]): number => {
  const bannedSet = new Set(banned)
  let count: number = 0

  for (let curr = 1; curr < n + 1; curr++) {
    if (bannedSet.has(curr)) continue

    if (maxSum - curr < 0) return count

    maxSum -= curr
    count++
  }

  return count
}

const banned = [1, 6, 5]
const n = 5
const maxSum = 6

console.log(maxCount(n, maxSum, banned))
