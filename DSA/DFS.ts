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

// Inorder Traversal
// @ts-ignore
const inorderTraversal = (root: TreeNode | null): number[] => {
  const result: number[] = []
  const stack: TreeNode[] = []
  let current: TreeNode | null = root

  while (current !== null || stack.length > 0) {
    while (current !== null) {
      stack.push(current)
      current = current.left
    }

    current = stack.pop()!
    result.push(current.val)
    current = current.right
  }

  return result
}

// Preorder Traversal
const preorderTraversal = (root: TreeNode | null): number[] => {
  const result: number[] = []
  const stack: TreeNode[] = []

  if (root !== null) {
    stack.push(root)
  }

  while (stack.length > 0) {
    const node = stack.pop()!
    result.push(node.val)

    if (node.right !== null) {
      stack.push(node.right)
    }

    if (node.left !== null) {
      stack.push(node.left)
    }
  }

  return result
}

// Postorder Traversal
const postorderTraversal = (root: TreeNode | null): number[] => {
  const result: number[] = []
  const stack: TreeNode[] = []

  if (root !== null) {
    stack.push(root)
  }

  while (stack.length > 0) {
    const node = stack.pop()!
    result.unshift(node.val)

    if (node.left !== null) {
      stack.push(node.left)
    }

    if (node.right !== null) {
      stack.push(node.right)
    }
  }

  return result
}
