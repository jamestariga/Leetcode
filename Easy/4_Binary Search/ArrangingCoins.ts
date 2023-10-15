// Brute Force
// const arrangeCoins = (n: number): number => {
//   let maxRow = 0

//   for (let i = 1; i <= n; i++) {
//     if (n !== 0) {
//       n -= i
//       maxRow++
//     }
//   }

//   return maxRow
// }

// Big-O = O(n) where n is the number of input
// Space Complexity = O(1)

// Binary Search
const arrangeCoins = (n: number): number => {
  let start = 1
  let end = n

  while (start <= end) {
    let middle = start + Math.floor((end - start) / 2)
    let total = Math.floor((middle * (middle + 1)) / 2)

    if (total === n) return middle

    if (total < n) {
      start = middle + 1
    } else {
      end = middle - 1
    }
  }

  return end
}

// Big-O = O(logn) where n is the number of input and every iteration is cut in half leading to logarithmic time complexity
// Space Complexity = O(1) the algorithm uses a constant amount of extra space for the pointers and variables, resulting in constant space complexity

// @ts-ignore
const n = 12
console.log(arrangeCoins(n))
