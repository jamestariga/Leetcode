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

const searchBST = (root: TreeNode | null, val: number): TreeNode | null => {
  if (root === null) return null

  if (root.val === val) return root

  if (root.val > val) {
    return searchBST(root.left, val)
  } else {
    return searchBST(root.right, val)
  }
}

const val = 2
const tree = new TreeNode(
  4,
  new TreeNode(2, new TreeNode(1), new TreeNode(3)),
  new TreeNode(7)
)

console.log(searchBST(tree, val))
