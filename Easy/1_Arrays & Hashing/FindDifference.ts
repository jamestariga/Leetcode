const findDifference = (nums1: number[], nums2: number[]): number[][] => {
  let nums1Set = new Set<number>(nums1)
  let nums2Set = new Set<number>(nums2)
  let arr1 = new Set<number>()
  let arr2 = new Set<number>()

  for (let i of nums1) {
    // Check if the element does not exist in the second array
    if (!nums2Set.has(i)) arr1.add(i)
  }

  for (let i of nums2) {
    // Check if the element does not exist in the first array
    if (!nums1Set.has(i)) arr2.add(i)
  }

  return [Array.from(arr1), Array.from(arr2)]
}

// @ts-ignore
const nums1 = [1, 2, 3]
// @ts-ignore
const nums2 = [2, 4, 6]
console.log(findDifference(nums1, nums2))
