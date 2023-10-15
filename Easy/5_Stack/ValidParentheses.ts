const isValid = (s: string) => {
  const stack: string[] = []
  const map = {
    ')': '(',
    '}': '{',
    ']': '[',
  }

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      console.log(map[s[i]])
      if (stack.pop() !== map[s[i]]) return false
    } else {
      stack.push(s[i])
    }
  }

  console.log(stack.length)

  return stack.length === 0
}

// @ts-ignore
const s = '(){}[]'

console.log(isValid(s))
