const maxTurbulenceSize = (arr: number[]): number => {
  if (arr.length <= 1) return 1

  let maxLen: number = 1
  let left: number = 0
  let right: number = 1
  let prev: string = ''

  while (right < arr.length) {
    if (arr[right - 1] > arr[right] && prev !== '>') {
      prev = '>'
    } else if (arr[right - 1] < arr[right] && prev !== '<') {
      prev = '<'
    } else {
      if (arr[right - 1] === arr[right]) {
        left = right
      } else {
        left = right - 1
      }
    }

    maxLen = Math.max(maxLen, right - left + 1)
    right++
  }

  return maxLen
}

const arr = [4, 8, 12, 16]
console.log(maxTurbulenceSize(arr))
