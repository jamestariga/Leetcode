const nextGreaterElement = (nums1: number[], nums2: number[]): number[] => {
  let map: { [key: number]: number } = {}

  for (let i = 0; i < nums1.length; i++) {
    map[nums1[i]] = i
  }

  let arr = new Array(nums1.length).fill(-1)
  let stack: number[] = []

  for (let i = 0; i < nums2.length; i++) {
    let curr = nums2[i]

    while (stack.length && curr > stack.at(-1)) {
      let val = stack.pop()!
      let idx = map[val]
      arr[idx] = curr
    }

    if (curr in map) {
      stack.push(curr)
    }
  }

  return arr
}

// @ts-ignore
const nums1 = [1, 3, 5, 2, 4]
// @ts-ignore
const nums2 = [6, 5, 4, 3, 2, 1, 7]

console.log(nextGreaterElement(nums1, nums2))

/* Approach: 

Mapping Index in nums1: The algorithm first creates a mapping of each element in nums1 to its index in the array. This is done using the map object.

Initialization: It initializes an array arr of the same length as nums1 filled with -1. This array will store the next greater elements.

Stack for Tracking Next Greater Elements: The algorithm uses a stack to keep track of elements in nums2. It iterates through nums2 and for each element:

If the stack is not empty and the current element(curr) is greater than the element at the top of the stack, it means curr is the next greater element
for the element at the top of the stack.In this case, it updates the corresponding index in arr with curr.

If the current element is in the map (i.e., it is one of the elements in nums1), it pushes the current element onto the stack.
Completing the Array: After iterating through nums2, there might be elements in stack for which the next greater element was not found. 
These elements correspond to elements in nums1 for which there is no greater element to the right.The algorithm leaves these elements in arr as -1.

Time Complexity:

The time complexity is O(m + n), where m is the length of nums2 and n is the length of nums1.
The algorithm iterates through both nums2 and nums1 once, and the operations inside the loops are constant time.

Space Complexity:

The space complexity is O(n), where n is the length of nums1.
The algorithm uses additional space for the map, arr, and stack. */
