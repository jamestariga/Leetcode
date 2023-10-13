// Solution 1: Brute Force
// const containsDuplicate = (n: number[]) => {
//   const temp: number[] = []

//   for (let i of n) {
//     if (temp.includes(i)) {
//       return true
//     } else {
//       temp.push(i)
//     }
//   }
//   return false
// }

// Big-O = O(n^2)
// Space = O(n)

// Solution 2: Hash Set
// const containsDuplicate = (n: number[]) => {
//   let set = new Set<number>()

//   for (let i of n) {
//     if (set.has(i)) return true

//     set.add(i)
//   }

//   return false
// }

// Big-O = O(n)
// Space = O(n)

// Explanation:
// It initializes an empty Set called set to keep track of unique elements.
// It iterates through each element i in the input array n.
// Inside the loop:
// It checks if the current element i is already present in the set using set.has(i).
// If i is found in the set, it means there's a duplicate, and the function immediately returns true.
// If the loop completes without finding any duplicates, it adds the current element i to the set using set.add(i).
// Finally, if the loop completes without returning true, the function returns false, indicating that no duplicates were found.

// Solution 3: Hash Map (object)
const containsDuplicate = (nums: number[]) => {
  let map: { [key: number]: boolean } = {}

  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = true
  }

  return nums.length !== Object.keys(map).length
}

// Big-O = O(n)
// Space = O(n)

// Explanation:
// It initializes an empty map to keep track of unique elements.
// It iterates through each element in the input array nums.
// Inside the loop, it adds each element to the map with a value of true.
// After iterating through all elements, it compares the length of the original array nums with the
// number of unique elements in the map.
// If the lengths are not equal, it means there are duplicate elements, and the function returns true.
// Otherwise, it returns false.

// The time complexity of the provided code is O(n), where n is the length of the input array nums.This is because the
// code iterates through each element of the array once, and the operations inside the loop take constant time.

// The space complexity is also O(n) in the worst case. In the worst scenario, where all elements in the nums array are
// distinct, the map will have to store n unique elements.Each element in the map takes constant space, so the overall
// space complexity is O(n).

// const nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
const nums = [1, 2, 3, 4, 5]

console.log(containsDuplicate(nums))
