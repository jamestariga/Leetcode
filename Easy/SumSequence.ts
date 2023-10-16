const getSequence = (i: number, j: number, k: number) => {
  let result = 0

  for (let start = i; start <= j; start++) {
    result += start
  }

  for (let start = j - 1; start >= k; start--) {
    result += start
  }

  return result
}

const i = 5
const j = 9
const k = 6

console.log(getSequence(i, j, k))
