// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

// Solution:

const isValid = (s) => {
  let stack = []

  let map = {
    ')': '(',
    ']': '[',
    '}': '{',
  }

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      if (stack.pop() !== map[s[i]]) {
        return false
      }
    } else {
      stack.push(s[i])
    }
  }

  return stack.length === 0
}
