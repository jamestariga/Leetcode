const findLengthOfShortestSubarray = (arr: number[]): number => {
  let n = arr.length
  let right = arr.length - 1

  while (right > 0 && arr[right - 1] <= arr[right]) {
    right--
  }

  let result = right
  let left = 0

  while (left < right) {
    while (right < n && arr[left] > arr[right]) {
      right++
    }

    result = Math.min(result, right - left - 1)

    if (arr[left] > arr[left + 1]) {
      break
    }

    left++
  }

  return result
}

const arr = [1, 2, 3, 10, 4, 2, 3, 5]
console.log(findLengthOfShortestSubarray(arr))
