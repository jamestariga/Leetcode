const maximumSwap = (num: number): number => {
  const nums = num.toString()
  let arr = []

  for (let i = 0; i < nums.length; i++) {
    arr.push(Number(nums[i]))
  }

  let max = 0
  let maxIndex = arr.length - 1
  let swapIndexMax = -1
  let swapIndexMin = -1

  for (let i = arr.length - 1; i >= 0; i--) {
    if (max < arr[i]) {
      max = arr[i]
      maxIndex = i
    }

    if (max > arr[i]) {
      swapIndexMin = i
      swapIndexMax = maxIndex
    }
  }

  let temp = arr[swapIndexMax]
  arr[swapIndexMax] = arr[swapIndexMin]
  arr[swapIndexMin] = temp

  return parseInt(arr.join('').toString())
}

const num = 2736
console.log(maximumSwap(num))
