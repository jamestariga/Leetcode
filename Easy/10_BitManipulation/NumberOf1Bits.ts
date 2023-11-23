function hammingWeight(n: number): number {
  let count = 0

  while (n !== 0) {
    if (n & 1) {
      count++
    }

    n = n >>> 1
  }

  return count
}

// const n = 00000000000000000000000000001011

// console.log(hammingWeight(n))
