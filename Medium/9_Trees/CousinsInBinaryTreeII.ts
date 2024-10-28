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

// const replaceValueInTree = (root: TreeNode | null): TreeNode | null => {
//   if (!root) return root

//   const queue: TreeNode[] = []
//   const levelSum: number[] = []
//   let level: number = 0

//   if (root) queue.push(root)

//   while (queue.length > 0) {
//     let levelLength: number = queue.length
//     let currSum: number = 0

//     for (let i = 0; i < levelLength; i++) {
//       let curr: TreeNode = queue.shift()

//       currSum += curr.val

//       if (curr.left) {
//         queue.push(curr.left)
//       }

//       if (curr.right) {
//         queue.push(curr.right)
//       }
//     }

//     levelSum.push(currSum)
//   }

//   const queue2 = []

//   if (root) {
//     queue2.push([root, root.val])
//   }

//   while (queue2.length > 0) {
//     let levelLength: number = queue2.length

//     for (let i = 0; i < levelLength; i++) {
//       let [node, val]: [TreeNode, number] = queue2.shift()
//       node.val = levelSum[level] - val

//       let childSum: number = 0

//       if (node.left) {
//         childSum += node.left.val
//       }

//       if (node.right) {
//         childSum += node.right.val
//       }

//       if (node.left) {
//         queue2.push([node.left, childSum])
//       }

//       if (node.right) {
//         queue2.push([node.right, childSum])
//       }
//     }

//     level++
//   }

//   return root
// }

const replaceValueInTree = (root: TreeNode | null): TreeNode | null => {
  if (!root) return root

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

    levelSum.push(currSum)
  }

  const queue2 = []
  root.val = 0

  if (root) queue2.push(root)

  while (queue2.length > 0) {
    let levelLength: number = queue2.length

    for (let i = 0; i < levelLength; i++) {
      let node: TreeNode = queue2.shift()

      let childSum: number = 0

      if (node.left) {
        childSum += node.left.val
      }

      if (node.right) {
        childSum += node.right.val
      }

      if (node.left) {
        node.left.val = levelSum[level + 1] - childSum
        queue2.push(node.left)
      }

      if (node.right) {
        node.right.val = levelSum[level + 1] - childSum
        queue2.push(node.right)
      }
    }

    level++
  }

  return root
}

// const root = [5, 4, 9, 1, 10, null, 7]
const root = new TreeNode(
  5,
  new TreeNode(4, new TreeNode(1), new TreeNode(10)),
  new TreeNode(9, new TreeNode(null), new TreeNode(7))
)

console.log(replaceValueInTree(root))
