const checkIfExist = (arr: number[]): boolean => {
  const set = new Set()

  for (const num of arr) {
    if (set.has(num / 2) || set.has(num * 2)) return true
    set.add(num)
  }

  return false
}

const arr = [10, 2, 5, 3]

console.log(checkIfExist(arr))
