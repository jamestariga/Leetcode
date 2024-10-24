const subsets = (nums: number[]): number[][] => {
  const arr: number[][] = []

  const dfs = (i: number, curr: number[]) => {
    if (i >= nums.length) {
      arr.push(curr.slice())
      return
    }

    curr.push(nums[i])
    dfs(i + 1, curr)

    curr.pop()
    dfs(i + 1, curr)
  }

  dfs(0, [])

  return arr
}

const nums = [1, 2, 3]

console.log(subsets(nums))
