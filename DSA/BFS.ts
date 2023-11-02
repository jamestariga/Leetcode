// @ts-ignore
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

const BFS = (root: TreeNode | null) => {
  const queue: TreeNode[] = []
  const result: number[] = []

  if (root) queue.push(root)

  while (queue.length > 0) {
    for (let i = 0; i < queue.length; i++) {
      let curr = queue.shift()

      result.push(curr.val)

      if (curr.left) {
        queue.push(curr.left)
      }

      if (curr.right) {
        queue.push(curr.right)
      }
    }
  }

  return result
}

// @ts-ignore
const tree = new TreeNode(
  5,
  new TreeNode(2, new TreeNode(1)),
  new TreeNode(3, null, new TreeNode(4))
)

console.log(BFS(tree))
