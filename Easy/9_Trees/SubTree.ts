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

const isSubtree = (
  root: TreeNode | null,
  subRoot: TreeNode | null
): boolean => {
  if (!subRoot) return true

  if (!root) return false

  if (sameTree(root, subRoot)) return true

  let left = isSubtree(root.left, subRoot)

  let right = isSubtree(root.right, subRoot)

  return left || right
}

const sameTree = (p: TreeNode | null, q: TreeNode | null): boolean => {
  if (!p && !q) return true

  if ((!p && q) || (p && !q)) return false

  let left = sameTree(p.left, q.left)
  let right = sameTree(p.right, q.right)

  if (p.val === q.val && left && right) return true

  return false
}

const Tree1 = new TreeNode(
  3,
  new TreeNode(4, new TreeNode(1), new TreeNode(2)),
  new TreeNode(5)
)

const Tree2 = new TreeNode(4, new TreeNode(1), new TreeNode(2))

console.log(isSubtree(Tree1, Tree2))

// Intuition:
// Are goal is to determine whether `subRoot` is a sub tree of`root`.We can achieve this by checking
// if at any given time subRoot exist in the root. We create a helper function called `sameTree` to
// check whether the subRoot exist in the root.
