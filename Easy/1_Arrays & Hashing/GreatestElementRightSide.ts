const replaceElements = (arr: number[]) => {
  let max = arr[arr.length - 1]
  arr[arr.length - 1] = -1

  for (let i = arr.length - 2; i >= 0; i--) {
    let curr = arr[i]
    arr[i] = max
    if (curr > max) {
      max = curr
    }
  }

  return arr
}

const arr = [17, 18, 5, 4, 6, 1]

console.log(replaceElements(arr))
