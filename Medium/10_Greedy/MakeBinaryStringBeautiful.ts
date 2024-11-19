const minChanges = (s: string): number => {
  let result: number = 0

  for (let i = 0; i < s.length; i += 2) {
    if (s[i] !== s[i + 1]) result++
  }

  return result
}

const s = '11000111'

console.log(minChanges(s))

// The idea is to check in pairs by incrementing `i` by 2 every iteration.
