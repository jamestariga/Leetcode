const intersection = (nums1: number[], nums2: number[]): number[] => {
  const set = new Set<number>(nums1)
  const result = new Set<number>()

  for (const num of nums2) {
    if (set.has(num)) {
      result.add(num)
    }
  }

  return Array.from(result)
}

// const intersection = (nums1: number[], nums2: number[]): number[] => {
//     const set1 = new Set(nums1)
//     const set2 = new Set(nums2)
//     const result: number[] = []

//     set1.forEach((el) => {
//       if (set2.has(el)) {
//         result.push(el)
//       }
//     })

//     return result
// };

const nums1 = [4, 9, 5]
const nums2 = [9, 4, 9, 8, 4]

console.log(intersection(nums1, nums2))
