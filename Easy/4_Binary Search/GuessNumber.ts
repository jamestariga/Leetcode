const guessNumber = (n: number): number => {
  let start = 0
  let end = n
  let mid: number

  while (start < end) {
    mid = start + Math.floor((end - start) / 2)

    if (guess(mid) === 0) {
      return mid
    } else if (guess(mid) === -1) {
      end = mid - 1
    } else {
      start = mid + 1
    }
  }

  return start
}

const guess = (n: number): number => {
  const pick = 4
  if (n > pick) {
    return -1
  } else if (n < pick) {
    return 1
  }

  return 0
}

// @ts-ignore
const n = 10
const pick = 6

console.log(guessNumber(n))
