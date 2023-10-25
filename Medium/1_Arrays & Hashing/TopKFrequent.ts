// const topKFrequent = (nums: number[], k: number): number[] => {
//   let result: number[] = []
//   let hashMap = new Map<number, number>()

//   for (let i = 0; i < nums.length; i++) {
//     if (hashMap.has(nums[i])) {
//       let currentValue = hashMap.get(nums[i])
//       hashMap.set(nums[i], currentValue + 1)
//     } else {
//       hashMap.set(nums[i], 1)
//     }
//   }

//   const sortedArray = Array.from(hashMap.entries()).sort((a, b) => b[1] - a[1])

//   for (let [key, value] of sortedArray) {
//     if (k > result.length) {
//       result.push(key)
//     }
//   }

//   return result
// }

// Big-O = O(nlogn)
// Space = O(n)

const topKFrequent = (nums: number[], k: number): number[] => {
  //  Initialize the hash map to store the frequency of the elements
  let hashMap = new Map<number, number>()

  // Store the elements
  let result: number[] = []

  // Frequency index, initializes the array with empty arrays
  let freq: number[][] = Array.from({ length: nums.length + 1 }, () => [])

  for (const num of nums) {
    // Count the frequency of the elements from the nums array
    hashMap.set(num, (hashMap.get(num) || 0) + 1)
  }

  for (const [key, value] of hashMap.entries()) {
    // Stores the value in the index of their perspective key from the map
    freq[value].push(key)
  }

  // Loop starts from the end to get the most frequent elements
  for (let i = freq.length - 1; i >= 0; i--) {
    for (const n of freq[i]) {
      // Add the elements that are K frequent
      if (k > result.length) {
        result.push(n)
      }
    }
  }

  return result
}

// Big-O = O(n)
// Space complexity = O(n)

// @ts-ignore
const nums = [1, 1, 1, 2, 2, 3]
// @ts-ignore
const k = 2

console.log(topKFrequent(nums, k))

/* Approach:
1. We initialize the hashMap to store the frequency of the elements.

2. We store the elements in a result array.

3. We initialize the freq to store the frequency of the elements from the nums array.

4. We count the frequency of the elements from the nums array.

5. We store the value in the index of their respective key from the map.

6. We loop from the end to get the most frequent elements.

7. We add the elements that are K frequent.

8. We return the result array. */
