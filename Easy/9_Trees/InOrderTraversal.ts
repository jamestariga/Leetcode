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

// const inorderTraversal = (root: TreeNode | null): number[] => {
//   let result = []

//   const traverse = (root: TreeNode | null): number[] => {
//     if (root) {
//       traverse(root.left)
//       result.push(root.val)
//       traverse(root.right)
//     }

//     return result
//   }

//   return traverse(root)
// }

const inorderTraversal = (root: TreeNode | null): number[] => {
  const stack: TreeNode[] = []
  const result: number[] = []
  let current: TreeNode | null = root

  while (current || stack.length > 0) {
    while (current) {
      stack.push(current)
      current = current.left
    }

    current = stack.pop()!
    result.push(current.val)
    current = current.right
  }

  return result
}

// @ts-ignore
const tree = new TreeNode(
  4,
  new TreeNode(2, new TreeNode(1), new TreeNode(3)),
  new TreeNode(7)
)

console.log(inorderTraversal(tree))
