// Given an array of integers arr and two integers k and threshold, return the number of sub-arrays
// of size k and average greater than or equal to threshold.
const numOfSubarrays = (
  arr: number[],
  k: number,
  threshold: number
): number => {
  let total: number = 0
  let count: number = 0
  let average: number = 0

  for (let right = 0; right < arr.length; right++) {
    total += arr[right]

    if (right >= k - 1) {
      average = total / k

      if (average >= threshold) {
        count++
      }

      total -= arr[right - (k - 1)]
    }
  }

  return count
}

const arr = [2, 2, 2, 2, 5, 5, 5, 8]
const k = 3
const threshold = 4

console.log(numOfSubarrays(arr, k, threshold))
