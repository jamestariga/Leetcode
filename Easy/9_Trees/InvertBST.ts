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

// const invertTree = (root: TreeNode | null): TreeNode | null => {
//   if (!root) {
//     return null
//   } else {
//     let temp = root.right
//     root.right = root.left
//     root.left = temp

//     invertTree(root.left)
//     invertTree(root.right)

//     return root
//   }
// }

const invertTree = (root: TreeNode | null): TreeNode | null => {
  if (!root) return null

  let tempNode = root.left
  root.left = invertTree(root.right)
  root.right = invertTree(tempNode)

  return root
}

// @ts-ignore
const tree = new TreeNode(
  4,
  new TreeNode(2, new TreeNode(1), new TreeNode(3)),
  new TreeNode(7)
)

console.log(invertTree(tree))
