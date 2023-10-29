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

// DFS Recursion
const maxDepth = (root: TreeNode | null): number => {
  return root ? 1 + Math.max(maxDepth(root.right), maxDepth(root.left)) : 0
}

// @ts-ignore
const tree = new TreeNode(
  4,
  new TreeNode(3, new TreeNode(2)),
  new TreeNode(6, new TreeNode(5), new TreeNode(7))
)

console.log(tree)

console.log(maxDepth(tree))
