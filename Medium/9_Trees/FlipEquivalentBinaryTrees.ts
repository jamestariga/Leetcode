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

const flipEquiv = (root1: TreeNode | null, root2: TreeNode | null): boolean => {
  if (!root1 && !root2) {
    return true
  } else if (root1 && root2) {
    if (root1.val === root2.val) {
      if (
        flipEquiv(root1.left, root2.left) &&
        flipEquiv(root1.right, root2.right)
      ) {
        return true
      } else if (
        flipEquiv(root1.left, root2.right) &&
        flipEquiv(root1.right, root2.left)
      ) {
        return true
      }
    }
  }

  return false
}

// const root1 = [1, 2, 3, 4, 5, 6, null, null, null, 7, 8]
// const root2 = [1, 3, 2, null, 6, 4, 5, null, null, null, null, 8, 7]

const root1 = new TreeNode(
  1,
  new TreeNode(
    2,
    new TreeNode(4),
    new TreeNode(5, new TreeNode(7), new TreeNode(8))
  ),
  new TreeNode(3, new TreeNode(6), new TreeNode(null))
)

const root2 = new TreeNode(
  1,
  new TreeNode(3, new TreeNode(null), new TreeNode(6)),
  new TreeNode(
    2,
    new TreeNode(4),
    new TreeNode(5, new TreeNode(8), new TreeNode(7))
  )
)

console.log(flipEquiv(root1, root2))
