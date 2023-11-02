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

// BST Search
const searchNode = (root: TreeNode | null, target: number) => {
  if (root === null) return false

  if (target > root.val) {
    return searchNode(root.right, target)
  } else if (target < root.val) {
    return searchNode(root.left, target)
  } else {
    return true
  }
}

// BST Insert
const insertNode = (root: TreeNode | null, val: number) => {
  if (root === null) return new TreeNode(val)

  if (val > root.val) {
    root.right = insertNode(root.right, val)
  } else {
    root.left = insertNode(root.left, val)
  }

  return root
}

// BST Find Minimum
const minValueNode = (root: TreeNode | null) => {
  while (root && root.left) {
    root = root.left
  }

  return root
}

// BST Remove
const removeNode = (root: TreeNode | null, val: number) => {
  if (root === null) return null

  if (val > root.val) {
    root.right = removeNode(root.right, val)
  } else if (val < root.val) {
    root.left = removeNode(root.left, val)
  } else {
    if (root.left === null) {
      return root.right
    } else if (root.right === null) {
      return root.left
    } else {
      let minNode = minValueNode(root.right)
      root.val = minNode.val
      root.right = removeNode(root.right, minNode.val)
    }
  }

  return root
}

// @ts-ignore
const tree = new TreeNode(
  4,
  new TreeNode(3, new TreeNode(2)),
  new TreeNode(6, new TreeNode(5), new TreeNode(7))
)

// console.log(tree)
// console.log(search(tree, 1))
// console.log(insert(tree, 6))
// console.log(minValueNode(tree))
console.log(removeNode(tree, 6))
