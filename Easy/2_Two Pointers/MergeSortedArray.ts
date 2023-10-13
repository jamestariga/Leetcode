// Leetcode standard for some reason
// const merge = (nums1: number[], m: number, nums2: number[], n: number) => {
//   let index1 = m - 1
//   let index2 = n - 1

//   for (let i = n + m - 1; i >= 0 && index2 >= 0; i--) {
//     const num1 = nums1[index1]
//     const num2 = nums2[index2]

//     if (index1 >= 0 && num1 > num2) {
//       nums1[i] = num1
//       index1--
//     } else {
//       nums1[i] = num2
//       index2--
//     }
//   }
// }

const merge = (nums1: number[], m: number, nums2: number[], n: number) => {
  let index1 = m - 1
  let index2 = n - 1
  let arr: number[] = []
  let maxLen = Math.max(nums1.length, nums2.length)

  for (let i = 0; i < maxLen; i++) {
    if (index1 >= i) arr.push(nums1[i])
    if (index2 >= i) arr.push(nums2[i])
  }

  return arr.sort()
}

// @ts-ignore
const nums1 = [1, 2, 3, 0, 0, 0]
// @ts-ignore
const nums2 = [2, 5, 6]
const m = 3
// @ts-ignore
const n = 3

console.log(merge(nums1, m, nums2, n))
