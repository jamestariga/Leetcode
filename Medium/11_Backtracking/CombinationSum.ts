const combinationSum = (candidates: number[], target: number): number[][] => {
  let result: number[][] = []

  const dfs = (i: number, curr: number[], total: number) => {
    if (total === target) {
      // Add the subarray that has a total sum equals to the target
      result.push(curr.slice())
      return
    }

    // When we can't find combinations within our upper bound or total is greater than target
    if (i >= candidates.length || total > target) return

    curr.push(candidates[i])
    dfs(i, curr, total + candidates[i])

    curr.pop()
    dfs(i + 1, curr, total)
  }

  dfs(0, [], 0)

  return result
}

const candidates = [2, 3, 6, 7]
// @ts-ignore
const target = 7
console.log(combinationSum(candidates, target))
