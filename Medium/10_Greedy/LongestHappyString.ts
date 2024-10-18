const longestDiverseString = (a: number, b: number, c: number): string => {
  let total: number = a + b + c
  let result: string = ''
  let currA: number = 0
  let currB: number = 0
  let currC: number = 0

  for (let i = 0; i < total; i++) {
    if (
      (a >= b && a >= c && currA < 2) ||
      (a > 0 && (currB === 2 || currC === 2))
    ) {
      result += 'a'
      a--
      currA++
      currB = 0
      currC = 0
    } else if (
      (b >= a && b >= c && currB < 2) ||
      (b > 0 && (currA === 2 || currC === 2))
    ) {
      result += 'b'
      b--
      currB++
      currA = 0
      currC = 0
    } else if (
      (c >= a && c >= b && currC < 2) ||
      (c > 0 && (currA === 2 || currB === 2))
    ) {
      result += 'c'
      c--
      currC++
      currA = 0
      currB = 0
    }
  }

  return result
}

const a = 1,
  b = 1,
  c = 7

console.log(longestDiverseString(a, b, c))
