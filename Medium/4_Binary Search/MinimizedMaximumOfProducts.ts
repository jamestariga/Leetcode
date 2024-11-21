const minimizedMaximum = (n: number, quantities: number[]): number => {
  const canDistribute = (x: number): boolean => {
    let stores: number = 0

    for (const q of quantities) {
      stores += Math.ceil(q / x)
    }

    return stores <= n
  }

  let left: number = 0
  let right: number = Math.max(...quantities)
  let result: number = 0

  while (left <= right) {
    let middle: number = left + Math.ceil((right - left) / 2)

    if (canDistribute(middle)) {
      result = middle
      right = middle - 1
    } else {
      left = middle + 1
    }
  }

  return result
}

const quantities = [11, 6]
const n = 6

console.log(minimizedMaximum(n, quantities))
