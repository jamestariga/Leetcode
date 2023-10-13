const reverseString = (s: string[]) => {
  let tail = 0
  let head = s.length - 1

  while (tail <= head) {
    let temp = s[tail]
    s[tail] = s[head]
    s[head] = temp
    tail++
    head--
  }

  return s
}

// Big-O = O(n)
// Space = O(1)

// @ts-ignore
const s = ['h', 'e', 'l', 'l', 'o']

// @ts-ignore
console.log(reverseString(s))
