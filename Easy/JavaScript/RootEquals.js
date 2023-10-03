// const root = [10, 4, 6]
// const arr = [5, 3, 1]

// const checkTree = (root) => {
//   let bool = true
//   let sum = 0

//   for (let i = 0; i < root.length; i++) {
//     if (root.indexOf(root[i]) !== 0) {
//       sum += root[i]
//       if (sum !== root[0]) {
//         bool = false
//       } else {
//         bool = true
//       }
//     }
//   }

//   return bool
// }

// console.log(checkTree(root))

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

const checkTree = (root) => {
  return root.val === root.left.val + root.right.val
}
