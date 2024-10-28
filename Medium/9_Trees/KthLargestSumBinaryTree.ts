class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

const kthLargestLevelSum = (root: TreeNode | null, k: number): number => {
  const queue: TreeNode[] = []
  const levelSum: number[] = []
  let level: number = 0

  if (root) queue.push(root)

  while (queue.length > 0) {
    let levelLength: number = queue.length
    let currSum: number = 0

    for (let i = 0; i < levelLength; i++) {
      let curr: TreeNode = queue.shift()

      currSum += curr.val

      if (curr.left) {
        queue.push(curr.left)
      }

      if (curr.right) {
        queue.push(curr.right)
      }
    }

    levelSum[level] = currSum
    level++
  }

  levelSum.sort((a, b) => b - a)

  if (k > level) {
    return -1
  }

  return levelSum[k - 1]
}

// const root = [5, 8, 9, 2, 1, 3, 7, 4, 6]
const k = 2

const root = new TreeNode(
  5,
  new TreeNode(
    8,
    new TreeNode(2, new TreeNode(4), new TreeNode(6)),
    new TreeNode(1)
  ),
  new TreeNode(9, new TreeNode(3), new TreeNode(7))
)

// const root = new TreeNode(
//   1,
//   new TreeNode(2, new TreeNode(3)),
//   new TreeNode(null)
// )

console.log(kthLargestLevelSum(root, k))
